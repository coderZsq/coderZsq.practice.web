import styled from 'styled-components';

export const SQEditPageWrapper = styled.div`
  padding: 0 30px;

  .area {
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;

    textarea {
      width: 50%;
      height: 90vh;
      resize: none;
      border: 1px solid #eee;
      font-size: 20px;
      padding: 5px 10px;
    }

    .input {
      border-right: none;
    }
  }

  .info {
    margin-top: 10px;
    display: flex;

    div {
      padding-right: 10px;
    }
  }
`;
