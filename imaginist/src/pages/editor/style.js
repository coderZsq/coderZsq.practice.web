import styled from 'styled-components';

export const SQEditPageWrapper = styled.div`
  padding: 0 30px;

  @media (max-width: 576px) {
    padding: 0 10px;
    .preview {
      display: none;
    }
    .right {
      display: inline-block !important;
    }
  }

  .area {
    display: flex;
    justify-content: space-evenly;
    outline-style: none;

    .item {
      height: 85vh;
      resize: none;
      border: 1px solid #eee;
      padding: 5px 10px;
    }

    .edit {
      flex: 1;
      font-size: 17px;
      color: #333;
    }

    .dragover {
      background-color: #fff;
      color: #ccc;
    }

    .preview {
      flex: 1;
      overflow: scroll;
      border-left: none;
    }
  }

  .info {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      div {
        padding-right: 15px;
      }
    }
    .right {
      display: none;
    }
  }
  .ant-switch-checked {
    background-color: #80c47e;
  }
`;
