import styled from 'styled-components';

export const SQHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 65px;

  .left {
    display: flex;
    align-items: center;

    .brand {
      text-align: center;

      font-size: 30px;
      width: 120px;
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
      text-align: center;

      width: 60px;
      height: 30px;
      line-height: 30px;
      color: #fff;
      background-color: #80c47e;
      border-radius: 4px;
    }

    .profile {
      text-align: center;

      width: 32px;
      height: 32px;
      line-height: 32px;
      margin-right: 15px;
      border-radius: 100%;
      border: 1px solid #333;
    }
  }
`;
