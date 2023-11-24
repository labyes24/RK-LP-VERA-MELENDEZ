import styled from 'styled-components'

export const Container = styled.div`
  padding: 3rem 2rem;

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;

    h1 {
      font-size: 2.4rem;
      font-family: ${({ theme }) => theme.FONTS.Primary};
      text-align: center;

      margin-bottom: 4rem;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      > strong {
        font-family: ${({ theme }) => theme.FONTS.Secondary};
        font-weight: 800;
        margin-bottom: 2rem;
        font-size: 1.8rem;
      }

      > p {
        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.FONTS.Primary};
        line-height: 2.2rem;
        text-align: justify;
        margin-bottom: 2rem;

        span {
          margin: 2rem 0;
          font-weight: 500;
          line-height: 2.2rem;
          color: ${({ theme }) => theme.COLORS['zinc-100']};
        }
      }

      @media (min-width: 1024px) {
        > strong {
          font-size: 2.4rem;
        }

        > p {
          font-size: 1.8rem;
          line-height: 2.5rem;
        }

        > span {
          width: 80rem;
          line-height: 2rem;
        }
      }
    }
    @media (min-width: 1024px) {
      padding: 4.2rem 3.5rem;
      > h1 {
        align-self: center;
        font-size: 3.6rem;
        line-height: 100%;
      }
    }
  }
`
