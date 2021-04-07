import React, { useState, useEffect, useRef, memo } from 'react';
import _ from 'lodash';
import marked from 'marked';
import { Input, message } from 'antd';
import Dropzone from 'react-dropzone';

import SQAppHeader from 'components/app-header';
import { SQEditPageWrapper } from './style';
import { SQMarkdownWrapper } from '@/style/markdown.style';

import { wordCount } from '@/common/util/strings';
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from '@/common/util/storages';
import {
  EDITOR_EDIT_STORAGE,
  EDITOR_PREVIEW_STORAGE,
} from '@/common/constants';
import { getCursorPosition } from '@/common/util/cursors';
import { setArticle, uploadImg } from '@/service/article';
import { BASE_URL } from '@/service/config';
const { MARKDOWN_PLACEHOLDER } = require('@/common/constants');
const { TextArea } = Input;

export default memo(function SQEditorPage(props) {
  const [editContent, setEditContent] = useState(
    getLocalStorage(EDITOR_EDIT_STORAGE) || ''
  );

  const [previewContent, setPreviewContent] = useState(
    getLocalStorage(EDITOR_PREVIEW_STORAGE) || ''
  );

  const editRef = useRef();

  useEffect(() => {
    return () => {
      setLocalStorage(EDITOR_EDIT_STORAGE, editContent);
      setLocalStorage(EDITOR_PREVIEW_STORAGE, previewContent);
    };
  }, [editContent, previewContent]);

  const onChange = (e) => {
    setEditContent(e.target.value);
    _.debounce(() => {
      setPreviewContent(marked(e.target.value));
    }, 500)();
  };

  const onDrop = (acceptedFiles) => {
    const img = acceptedFiles[0];
    if (!/image\/\w+/.test(img.type)) {
      message.error('拖拽上传只支持图片呢~');
      return false;
    }

    uploadImg({ img }).then((res) => {
      let p = getCursorPosition(editRef.current.resizableTextArea.textArea);
      const content = `${editContent.slice(0, p)}![](${BASE_URL}/${
        res.data
      })${editContent.slice(p)}`;
      setEditContent(content);
      setPreviewContent(marked(content));
    });
  };

  const publishArticle = () => {
    if (editContent.length === 0) {
      message.error('您还没有写任何文字呢~');
      return;
    }
    if (editContent.indexOf('\n') < 0) {
      message.error('请您尝试再多写点文字吧~');
      return;
    }
    const edit = editContent;
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
      content: editContent,
      preview: marked(edit.slice(split + 1)),
      words: wordCount(editContent),
      duration: parseInt(wordCount(editContent) / 350),
      date: new Date().getTime(),
    };

    message.loading({ content: '发布文章中...', key: 'publish' });
    setArticle(option).then((res) => {
      props.history.push(`/article/${res.data}`);
      message.success({ content: '发布完成~', key: 'publish', duration: 2 });
      setTimeout(() => {
        removeLocalStorage(EDITOR_EDIT_STORAGE);
        removeLocalStorage(EDITOR_PREVIEW_STORAGE);
      }, 1000);
    });
  };

  return (
    <SQEditPageWrapper>
      <SQAppHeader
        greeting="Record something..."
        editing={true}
        onConfirm={publishArticle}
      />
      <Dropzone onDrop={onDrop}>
        {({ getRootProps }) => (
          <div className="area" {...getRootProps()}>
            <TextArea
              ref={editRef}
              autoFocus={true}
              className="item edit"
              onChange={onChange}
              value={editContent}
              placeholder={MARKDOWN_PLACEHOLDER}
            ></TextArea>
            <SQMarkdownWrapper
              className="item preview"
              dangerouslySetInnerHTML={{
                __html:
                  previewContent.length === 0
                    ? marked(MARKDOWN_PLACEHOLDER)
                    : previewContent,
              }}
            ></SQMarkdownWrapper>
          </div>
        )}
      </Dropzone>

      <div className="info">
        <div>阅读时长 {parseInt(wordCount(editContent) / 350)} 分钟</div>
        <div>字数: {wordCount(editContent)} 字</div>
      </div>
    </SQEditPageWrapper>
  );
});
