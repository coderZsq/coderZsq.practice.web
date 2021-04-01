import React, { useState, useEffect, useDispatch, memo } from 'react';
import _ from 'lodash';
import marked from 'marked';
import { Input } from 'antd';
import moment from 'moment';

import SQAppHeader from 'components/app-header';
import { SQEditPageWrapper } from './style';
import { wordCount } from '@/common/util/strings';
import { getLocalStorage, setLocalStorage } from '@/common/util/storages';
import {
  EDITOR_EDIT_STORAGE,
  EDITOR_PREVIEW_STORAGE,
} from '@/common/constants';
import { setArticle } from '@/service/article';

const { TextArea } = Input;

export default memo(function SQEditorPage() {
  const [content, setContent] = useState({
    edit: getLocalStorage(EDITOR_EDIT_STORAGE) || '',
    preview: getLocalStorage(EDITOR_PREVIEW_STORAGE) || '',
  });

  const onChange = (e) => {
    setContent({
      edit: e.target.value,
      preview: marked(e.target.value),
    });
  };

  useEffect(() => {
    return () => {
      setLocalStorage(EDITOR_EDIT_STORAGE, content.edit);
      setLocalStorage(EDITOR_PREVIEW_STORAGE, content.preview);
    };
  }, [content]);

  const publishArticle = () => {
    const option = {
      title: '123',
      type: 'doc',
      content: content.edit,
      preview: content.preview,
      words: wordCount(content.edit),
      duration: parseInt(wordCount(content.edit) / 350),
      date: new Date().getTime(),
    };
    setArticle(option).then((res) => {
      console.log(res);
    });
  };

  return (
    <SQEditPageWrapper>
      <SQAppHeader
        greeting="Record something..."
        editing={true}
        onConfirm={publishArticle}
      />
      <div className="area">
        <TextArea
          autoFocus={true}
          className="item edit"
          onChange={_.debounce(onChange, 500)}
          defaultValue={content.edit}
        ></TextArea>
        <div
          className="item preview"
          dangerouslySetInnerHTML={{ __html: content.preview }}
        ></div>
      </div>
      <div className="info">
        <div>阅读时长 {parseInt(wordCount(content.edit) / 350)} 分钟</div>
        <div>字数: {wordCount(content.edit)} 字</div>
      </div>
    </SQEditPageWrapper>
  );
});
