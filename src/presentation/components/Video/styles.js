import styled from 'styled-components'

export const Container = styled.div`
  max-width: 95rem;
  margin: 0 auto;
  text-align: center;
`

export const StyledVideo = styled.video`
  width: 100%;
  max-height: 50rem;
  background-color: ${({ theme }) => theme.COLORS['blue-sky-700']};
`
