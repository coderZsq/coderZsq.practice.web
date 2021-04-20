import styled from 'styled-components';

export const SQMiddleLayoutWrapper = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  width: 100%;
  box-shadow: 0px 0px 25px #eee;
  @media (min-width: 576px) {
    width: 95%;
  }
  @media (min-width: 768px) {
    width: 90%;
    margin: 10px auto;
    padding: 0 30px;
  }
  @media (min-width: 992px) {
    width: 80%;
    margin: 10px auto;
    padding: 0 30px;
  }
  @media (min-width: 1200px) {
    width: 70%;
    margin: 10px auto;
    padding: 0 30px;
  }
  @media (min-width: 1600px) {
    width: 60%;
    margin: 10px auto;
    padding: 0 30px;
  }
`;
