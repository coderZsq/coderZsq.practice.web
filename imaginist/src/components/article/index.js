import React, { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { CaretDownOutlined } from '@ant-design/icons';

import { formatDate } from '@/common/util/formats';
import { SQArticleWrapper } from './style';

export default memo(function SQArticle(props) {
  const { id, title, duration, words, date, preview } = props;
  const [collapse, setCollapse] = useState(true);

  const readAll = (collapse) => {
    if (collapse) {
      return (
        <>
          <span>阅读全文</span>
          <CaretDownOutlined className="icon" />
        </>
      );
    }
  };

  return (
    <SQArticleWrapper>
      <NavLink to={'article/' + id}>
        <div className="title">{title}</div>
      </NavLink>
      <div className="info">
        <div className="item date">{formatDate(date, 'yyyy-MM-dd')}</div>
        <div className="item duration">读完需要 {duration} 分钟</div>
        <div className="item words">共 {words} 字</div>
      </div>
      <div
        className={`content ${collapse ? 'collapse' : ''}`}
        dangerouslySetInnerHTML={{
          __html: collapse ? preview.slice(0, 850) : preview,
        }}
      ></div>
      <div className="read-all" onClick={() => setCollapse(false)}>
        {readAll(collapse)}
      </div>
    </SQArticleWrapper>
  );
});
