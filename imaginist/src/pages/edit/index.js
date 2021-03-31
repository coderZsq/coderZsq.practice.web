import React, { memo, useState } from 'react';

import marked from 'marked';
import { Input } from 'antd';

import SQAppHeader from 'components/app-header';
import { SQEditPageWrapper } from './style';
import { wordCount } from '@/common/util/strings';

const { TextArea } = Input;

export default memo(function SQEditPage() {
  const [inputContent, setInputContent] = useState('');
  const [previewContent, setPreviewContent] = useState('');

  const onChange = (e) => {
    setInputContent(e.target.value);
    setPreviewContent(marked(e.target.value));
  };

  return (
    <SQEditPageWrapper>
      <SQAppHeader greeting="Record something..." />
      <div className="area">
        <TextArea
          className="item input"
          onChange={onChange}
          value={inputContent}
        ></TextArea>
        <div
          className="item preview"
          dangerouslySetInnerHTML={{ __html: previewContent }}
        ></div>
      </div>
      <div className="info">
        <div>阅读时长 {parseInt(wordCount(inputContent) / 350)} 分钟</div>
        <div>字数: {wordCount(inputContent)} 字</div>
      </div>
    </SQEditPageWrapper>
  );
});
