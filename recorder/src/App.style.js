import styled from 'styled-components';

export const AppWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
  @media (min-width: 576px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 992px) {
    width: 70%;
  }
  @media (min-width: 1200px) {
    width: 60%;
  }
  @media (min-width: 1600px) {
    width: 50%;
  }
`;
