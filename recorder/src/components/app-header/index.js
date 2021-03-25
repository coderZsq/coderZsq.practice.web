import React, { memo } from 'react';

import { HeaderWrapper } from './style';
export default memo(function SQAppHeader() {
  return (
    <HeaderWrapper>
      <div className="left">
        <div className="brand">Castie!</div>
        <div className="greeting">Good afternoon</div>
      </div>
      <div className="right">S</div>
    </HeaderWrapper>
  );
});
