import styled from 'styled-components'

export const Container = styled.footer`
  position: absolute;
  bottom: 0;

  width: 100%;
  margin-bottom: 1.6rem;

  text-align: center;

  > p {
    color: ${({ theme }) => theme.COLORS.white};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;

    b {
      a {
        color: ${({ theme }) => theme.COLORS.white};
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
        text-decoration-line: underline;
      }
    }
  }
`
