import styled from 'styled-components';

export const SQGitHubBadgeWrapper = styled.div`
  svg {
    fill: #35363a;
    color: #fff;
    position: fixed;
    top: 0;
    border: 0;
    right: 0;
  }

  .octo-arm {
    transform-origin: 130px 106px;
  }

  .github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    .github-corner:hover .octo-arm {
      animation: none;
    }
    .github-corner .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
`;
