import styled from 'styled-components'

export const HomeWrapper = styled.div`
  font-size: 12px;
  color: red;

  .banner {
    background-color: blue;

    span {
      color: #fff;

      &.active {
        color: red;
      }

      &:hover {
        color: green;
      }

      &::after {
        content: "aaa";
      }
    }

    /* .active {
      color: #f00;
    } */
  }
`

export const TitleWrapper = styled.h2`
  text-decoration: underline;
  color: ${props => props.theme.themeColor};
  font-size: ${props => props.theme.fontSize};
`