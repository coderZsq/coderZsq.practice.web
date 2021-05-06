import styled from 'styled-components';

export const SQArticlePageWrapper = styled.div`
  width: 100%;
  padding-bottom: 60px;

  .title {
    margin-top: 20px;
    font-size: 26px;
    text-align: center;
  }

  .info {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .link {
      color: #4183c4;
      cursor: pointer;
    }

    .item {
      margin: 0 10px 0 0;
    }
  }

  .content {
    margin-top: 10px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
