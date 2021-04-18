import React, { useState, useEffect, useRef, memo } from 'react';
import Dropzone from 'react-dropzone';
import { Input, message, Switch } from 'antd';
import marked from 'marked';

import SQAppHeader from 'components/app-header';
import { SQEditPageWrapper } from './style';
import { SQMarkdownWrapper } from '@/style/markdown.style';

import { wordCount } from '@/common/util/strings';
import { getCursorPosition } from '@/common/util/cursors';
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from '@/common/util/storages';
import { EDITOR_STORAGE } from '@/common/constants';
import { MARKDOWN_PLACEHOLDER } from '@/common/constants';
import { setArticle, uploadImg } from '@/service/article';
import { BASE_URL } from '@/service/config';
import { batch } from '@/service/request';

export default memo(function SQEditorPage(props) {
  const [content, setContent] = useState({
    edit: getLocalStorage(EDITOR_STORAGE).edit || '',
    preview: getLocalStorage(EDITOR_STORAGE).preview || '',
  });
  const [previewed, setPreviewed] = useState(false);

  const editRef = useRef();
  const previewRef = useRef();

  useEffect(() => {
    onDragOver();
    onScroll();
    return () => {
      setLocalStorage(EDITOR_STORAGE, {
        edit: content.edit,
        preview: content.preview,
      });
    };
  }, [content]);

  const onDragOver = () => {
    const edit = editRef.current.resizableTextArea.textArea;
    const dragleaveCSS = edit.className;
    const dragoverCSS = edit.className + ' dragover';
    edit.addEventListener('dragover', () => {
      edit.className = dragoverCSS;
      edit.addEventListener('dragleave', () => {
        edit.className = dragleaveCSS;
      });
      edit.addEventListener('drop', () => {
        edit.className = dragleaveCSS;
      });
    });
  };

  const onScroll = () => {
    const edit = editRef.current.resizableTextArea.textArea;
    const preview = previewRef.current;
    edit.addEventListener('scroll', () => {
      const percentage =
        edit.scrollTop / (edit.scrollHeight - edit.offsetHeight);
      const height = percentage * (preview.scrollHeight - preview.offsetHeight);
      preview.scrollTop = height;
    });
  };

  const onChange = (e) => {
    setContent({
      edit: e.target.value,
      preview: marked(e.target.value),
    });
  };

  const onDrop = (acceptedFiles) => {
    let mdFile = null;
    let imgPaths = [];
    let requests = [];
    for (let file of acceptedFiles) {
      if ('' === file.type) {
        mdFile = file;
      }
      if (/image\/\w+/.test(file.type)) {
        let co = file.path.split('/').reverse();
        imgPaths.push(`${co[1]}/${co[0]}`);
        requests.push(uploadImg({ img: file }));
      }
    }

    const file = acceptedFiles[0];
    if (imgPaths.length === 0) {
      if (/text\/markdown/.test(file.type) || '' === file.type) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setContent({
            edit: e.target.result,
            preview: marked(e.target.result),
          });
        };
        reader.readAsText(file);
        return;
      }
    } else if (mdFile === null) {
      if (/image\/\w+/.test(file.type)) {
        uploadImg({ img: file }).then((res) => {
          let p = getCursorPosition(editRef.current.resizableTextArea.textArea);
          const edit = `${content.edit.slice(0, p)}![](${BASE_URL}/${
            res.data
          })${content.edit.slice(p)}`;
          setContent({
            edit: edit,
            preview: marked(edit),
          });
        });
        return;
      }
    } else {
      batch(requests, (...res) => {
        const reader = new FileReader();
        reader.readAsText(mdFile);
        reader.onload = (e) => {
          let edit = e.target.result;
          for (let i = 0; i < imgPaths.length; i++) {
            edit = edit.replace(
              `./${imgPaths[i]}`,
              `${BASE_URL}/${res[i].data}`
            );
            edit = edit.replace(`${imgPaths[i]}`, `${BASE_URL}/${res[i].data}`);
          }
          setContent({
            edit: edit,
            preview: marked(edit),
          });
        };
      });
    }
  };

  const onConfirm = () => {
    if (content.edit.length === 0) {
      message.error('您还没有写任何文字呢~');
      return;
    }
    if (content.edit.indexOf('\n') < 0) {
      message.error('请您尝试再多写点文字吧~');
      return;
    }
    const edit = content.edit;
    let split = 0;
    for (let i = 0; i < edit.length; i++) {
      if (edit.charAt(i) === '\n') {
        split = i;
        break;
      }
    }
    const option = {
      title: /#{0,}(.*)/.exec(edit.slice(0, split))[1].trim(),
      type: 'doc',
      content: edit,
      preview: marked(edit.slice(split + 1)),
      words: wordCount(edit),
      duration: parseInt(wordCount(edit) / 350),
      date: new Date().getTime(),
    };

    message.loading({ content: '发布文章中...', key: 'publish' });
    setArticle(option).then((res) => {
      props.history.push(`/article/${res.data}`);
      message.success({ content: '发布完成~', key: 'publish', duration: 2 });
      removeLocalStorage(EDITOR_STORAGE);
    });
  };

  return (
    <SQEditPageWrapper>
      <SQAppHeader
        greeting="Record something..."
        editing={true}
        onConfirm={onConfirm}
      />
      <div className="area">
        <Dropzone onDrop={onDrop}>
          {({ getRootProps }) => (
            <Input.TextArea
              {...getRootProps()}
              ref={editRef}
              autoFocus={true}
              className="item edit"
              onChange={onChange}
              value={content.edit}
              placeholder={MARKDOWN_PLACEHOLDER}
            ></Input.TextArea>
          )}
        </Dropzone>
        <SQMarkdownWrapper
          ref={previewRef}
          className="item preview"
          dangerouslySetInnerHTML={{
            __html:
              content.preview.length === 0
                ? marked(MARKDOWN_PLACEHOLDER)
                : content.preview,
          }}
        ></SQMarkdownWrapper>
      </div>
      <div className="info">
        <div className="left">
          <div>阅读时长 {parseInt(wordCount(content.edit) / 350)} 分钟</div>
          <div>字数: {wordCount(content.edit)} 字</div>
        </div>
        <div className="right">
          <Switch
            checkedChildren="预览模式"
            unCheckedChildren="编辑模式"
            onChange={() => {
              previewRef.current.style = `display: ${
                !previewed ? 'inline-block' : 'none'
              }`;
              editRef.current.resizableTextArea.textArea.style = `display: ${
                previewed ? 'inline-block' : 'none'
              }`;
              setPreviewed(!previewed);
            }}
          ></Switch>
        </div>
      </div>
    </SQEditPageWrapper>
  );
});
