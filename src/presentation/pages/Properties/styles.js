import styled from 'styled-components'

export const Container = styled.div`
  padding: 3.2rem 0;

  > h1 {
    width: fit-content;
    margin: 0 auto 2.4rem;
    align-self: center;

    font-family: ${({ theme }) => theme.FONTS.Primary};
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`
