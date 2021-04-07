import styled from 'styled-components';

export const SQHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 65px;
  width: 100%;

  @media (max-width: 576px) {
    .greeting {
      display: none;
    }
  }

  .left {
    display: flex;
    align-items: center;

    .brand {
      font-size: 30px;
      width: 110px;
    }

    .greeting {
      padding-left: 15px;
      border-left: 1px solid #333;
      margin-top: 4px;
      font-size: 14px;
      width: 150px;
    }
  }

  .right {
    display: flex;
    align-items: center;

    .publish {
      margin-right: 15px;
      border-radius: 4px;
    }

    .profile {
      color: #333;
      border-color: #333;
      background-color: #fff;
    }
  }
`;
