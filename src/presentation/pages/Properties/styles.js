import styled from 'styled-components'

export const Container = styled.div`
  padding: 3.2rem 0;

  @keyframes appear {
    from {
      transform: translateY(-10vh);
      opacity: 0;
    }
  }

  animation: appear 1s;

  > h1 {
    width: fit-content;

    padding: 0 1rem;
    margin: 0 auto 2.4rem;
    text-align: center;

    font-family: ${({ theme }) => theme.FONTS.Primary};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  @media (min-width: 1024px) {
    > h1 {
      align-self: center;
      font-size: 3.6rem;
      line-height: 100%;
    }
  }
`
