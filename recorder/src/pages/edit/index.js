import React, { memo } from 'react';

import SQAppHeader from 'components/app-header';
import { SQEditPageWrapper } from './style';

export default memo(function SQEditPage() {
  return (
    <SQEditPageWrapper>
      <SQAppHeader />
      <div className="area">
        <textarea className="input"></textarea>
        <textarea className="preview" disabled></textarea>
      </div>
      {/* <div className="info">
        <div>阅读时长 10分钟</div>
        <div>字数: 3567字</div>
      </div> */}
    </SQEditPageWrapper>
  );
});
