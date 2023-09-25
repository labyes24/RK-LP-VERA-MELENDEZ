import styled from 'styled-components'

export const Container = styled.div`
  max-width: 950px;
  margin: 0 2rem;
  text-align: center;
  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`

export const StyledVideo = styled.video`
  width: 100%;
  max-height: 500px;
  background-color: ${({ theme }) => theme.COLORS['blue-sky-700']};
`
