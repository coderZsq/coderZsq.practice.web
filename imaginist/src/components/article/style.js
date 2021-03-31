import styled from 'styled-components';

export const SQArticleWrapper = styled.div`
  padding: 15px;
  width: 100%;

  h2 {
    margin-top: 15px;
  }

  p {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 16px;
  }

  .title {
    font-size: 24px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .info {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .item {
      margin: 0 15px 0 0;
    }
  }

  .content {
    margin-top: 10px;
  }

  .collapse {
    height: 300px;
    overflow: hidden;
  }

  .read-all {
    margin-top: 10px;
    cursor: pointer;
  }
`;
