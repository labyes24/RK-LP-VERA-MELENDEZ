import styled from 'styled-components'

export const Container = styled.aside`
  max-width: 38rem;
  width: 100%;

  padding: 1rem;

  word-wrap: break-word;

  @media (max-width: 768px) {
    max-width: 28rem;
  }

  > ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;

    color: ${({ theme }) => theme.COLORS.white};
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    li {
      display: flex;
      align-items: center;
      column-gap: 1.6rem;

      p {
        word-break: break-word;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.COLORS.white};
        }
      }

      img {
        width: 3.2rem;
        height: 3.2rem;

        object-fit: cover;
        aspect-ratio: 16/9;

        @media (max-width: 768px) {
          width: 2.2rem;
          height: 2.2rem;
        }
      }
    }

    :first-child {
      align-items: start;
    }

    :nth-child(3) {
      font-size: 2.4rem;

      img {
        width: 3.6rem;
        height: 3.6rem;
      }
    }

    @media (max-width: 768px) {
      font-size: 1.6rem;

      :nth-child(3) {
        font-size: 2rem;

        img {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
`
