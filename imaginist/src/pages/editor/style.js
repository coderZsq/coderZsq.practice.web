import styled from 'styled-components';

export const SQEditPageWrapper = styled.div`
  padding: 0 30px;

  @media (max-width: 576px) {
    padding: 0 15px;
  }

  .area {
    margin-top: 10px;
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
      width: 48%;
      font-size: 17px;
    }

    .preview {
      width: 52%;
      overflow: scroll;
      border-left: none;
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
