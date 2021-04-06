import React, { useState, useEffect, memo } from 'react';
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
import { setArticle, uploadImg } from '@/service/article';
const { MARKDOWN_PLACEHOLDER } = require('@/common/constants');
const { TextArea } = Input;

export default memo(function SQEditorPage(props) {
  const [content, setContent] = useState({
    edit: getLocalStorage(EDITOR_EDIT_STORAGE) || '',
    preview: getLocalStorage(EDITOR_PREVIEW_STORAGE) || '',
  });

  useEffect(() => {
    return () => {
      setLocalStorage(EDITOR_EDIT_STORAGE, content.edit);
      setLocalStorage(EDITOR_PREVIEW_STORAGE, content.preview);
    };
  }, [content]);

  const onChange = (e) => {
    setContent({
      edit: e.target.value,
      preview: marked(e.target.value),
    });
  };

  const onDrop = (acceptedFiles) => {
    const img = acceptedFiles[0];
    if (!/image\/\w+/.test(img.type)) {
      message.error('拖拽上传只支持图片呢~');
      return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(img);
    console.log(reader);

    uploadImg({ img }).then((res) => {
      console.log(res);
    });
  };

  const publishArticle = () => {
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
      content: content.edit,
      preview: marked(edit.slice(split + 1)),
      words: wordCount(content.edit),
      duration: parseInt(wordCount(content.edit) / 350),
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
              autoFocus={true}
              className="item edit"
              onChange={_.debounce(onChange, 500)}
              defaultValue={content.edit}
              placeholder={MARKDOWN_PLACEHOLDER}
            ></TextArea>
            <SQMarkdownWrapper
              className="item preview"
              dangerouslySetInnerHTML={{
                __html:
                  content.preview.length === 0
                    ? marked(MARKDOWN_PLACEHOLDER)
                    : content.preview,
              }}
            ></SQMarkdownWrapper>
          </div>
        )}
      </Dropzone>

      <div className="info">
        <div>阅读时长 {parseInt(wordCount(content.edit) / 350)} 分钟</div>
        <div>字数: {wordCount(content.edit)} 字</div>
      </div>
    </SQEditPageWrapper>
  );
});
