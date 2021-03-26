import React, { memo, useState } from 'react';
import marked from 'marked';

import { formatDate } from '@/common/util/formats';
import { SQArticleWrapper } from './style';

export default memo(function SQArticle(props) {
  const { title, content, duration, words, date } = props;
  const [collapse, setCollapse] = useState(true);

  return (
    <SQArticleWrapper>
      <div className="title">{title}</div>
      <div className="info">
        <div className="item date">{formatDate(date, 'yyyy-MM-dd')}</div>
        <div className="item duration">读完需要 {duration} 分钟</div>
        <div className="item words">共 {words} 字</div>
      </div>
      <div
        className={`content ${collapse ? 'collapse' : ''}`}
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>
      <div className="read-all" onClick={(e) => setCollapse(false)}>
        <span>{collapse ? '阅读全文 🔽' : ''}</span>
      </div>
    </SQArticleWrapper>
  );
});
