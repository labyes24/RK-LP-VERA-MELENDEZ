import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  margin-bottom: 1.6rem;

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
