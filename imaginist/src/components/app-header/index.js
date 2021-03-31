import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { SQHeaderWrapper } from './style';
export default memo(function SQAppHeader(props) {
  const { greeting } = props;
  return (
    <SQHeaderWrapper>
      <div className="left">
        <NavLink to="/" className="brand">
          Castie!
        </NavLink>
        <div className="greeting">{greeting ? greeting : 'Good afternoon'}</div>
      </div>
      <div className="right">
        <NavLink to="/edit" className="publish">
          发布
        </NavLink>
        <div className="profile">S</div>
      </div>
    </SQHeaderWrapper>
  );
});
