import styled from 'styled-components';

export const SQEditPageWrapper = styled.div`
  padding: 0 30px;

  .area {
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;

    .item {
      height: 85vh;
      resize: none;
      border: 1px solid #eee;
      padding: 5px 10px;
    }

    .input {
      width: 48%;
      font-size: 17px;
      border-right: none;
    }

    .preview {
      width: 52%;
      overflow: scroll;
    }
  }

  .info {
    margin-top: 10px;
    display: flex;

    div {
      padding-right: 15px;
    }
  }
`;
