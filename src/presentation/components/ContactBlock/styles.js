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
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    li {
      display: flex;
      align-items: center;
      column-gap: 1.6rem;

      p {
        word-break: break-all;

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

    @media (max-width: 768px) {
      font-size: 1.4rem;

      :nth-child(2),
      li:nth-child(3) {
        font-size: 1.6rem;
      }
    }
  }
`
