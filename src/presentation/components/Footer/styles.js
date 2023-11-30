import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  background: rgba(0, 0, 0, 0.31);
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: bottomUp 1s ease-in-out;

  @keyframes bottomUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (min-width: 1442px) {
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.01) 0%,
      rgba(0, 0, 0, 0.3) 6%,
      rgba(0, 0, 0, 0.3) 94%,
      rgba(0, 0, 0, 0.01) 100%
    );
  }

  > p {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    color: ${({ theme }) => theme.COLORS.white};
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;

    b {
      a {
        color: ${({ theme }) => theme.COLORS.white};
        font-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
        text-decoration-line: underline;
      }
    }
  }
`
