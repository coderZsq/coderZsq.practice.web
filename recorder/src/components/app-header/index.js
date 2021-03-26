import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderWrapper } from './style';
export default memo(function SQAppHeader() {
  return (
    <HeaderWrapper>
      <div className="left">
        <NavLink to="/" className="brand">
          Castie!
        </NavLink>
        <div className="greeting">Good afternoon</div>
      </div>
      <div className="right">S</div>
    </HeaderWrapper>
  );
});
