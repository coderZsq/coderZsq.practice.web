import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Button, Popconfirm } from 'antd';
import { SQHeaderWrapper } from './style';
export default memo(function SQAppHeader(props) {
  const { greeting, editing } = props;

  const publishButton = () => {
    if (!editing) {
      return (
        <NavLink to="/editor">
          <Button className="publish" type="primary" size="middle">
            发布
          </Button>
        </NavLink>
      );
    } else {
      return (
        <Popconfirm
          placement="bottom"
          title={'确认发布文章?'}
          onConfirm={() => console.log('发布成功')}
          // okButtonProps={{ loading: true }}
          okText="发布"
          cancelText="取消"
        >
          <Button className="publish" type="primary" size="middle">
            发布
          </Button>
        </Popconfirm>
      );
    }
  };

  return (
    <SQHeaderWrapper>
      <div className="left">
        <NavLink to="/" className="brand">
          Castie!
        </NavLink>
        <div className="greeting">{greeting ? greeting : 'Good afternoon'}</div>
      </div>
      <div className="right">
        {publishButton()}
        <Button className="profile" type="primary" shape="circle">
          S
        </Button>
      </div>
    </SQHeaderWrapper>
  );
});
