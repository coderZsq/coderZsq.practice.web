import styled from 'styled-components';

export const SQArticleWrapper = styled.div`
  width: 100%;
  padding: 15px 0;

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
    max-height: 300px;
    overflow: hidden;
  }

  .read-all {
    display: flex;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;

    .icon {
      font-size: 18px;
      color: #333;
    }
  }
`;
