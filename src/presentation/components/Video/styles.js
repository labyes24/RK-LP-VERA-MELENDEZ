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
export const MessageError = styled.div`
  display: flex;
  flex-direction: column;
  aspect-ratio: 16/9;

  padding: 1.6rem;
  border-radius: 0.8rem;
  border: 3px solid ${({ theme }) => theme.COLORS['white']};
  justify-content: center;
  align-items: center;

  gap: 1rem;

  > img {
    height: 20%;
    width: 20%;
  }

  > span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.COLORS['white']};
  }
`
