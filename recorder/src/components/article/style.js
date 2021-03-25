import styled from 'styled-components';

export const SQArticleWrapper = styled.div`
  padding: 15px;

  .title {
    font-size: 24px;
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
