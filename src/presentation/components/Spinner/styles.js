import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
`
export const spin = keyframes`
  0% {
   transform: rotate(0deg);
  }

  100% {
      transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  border: 5px solid ${({ theme }) => theme.COLORS['blue-sky']};
  border-top: 5px solid ${({ theme }) => theme.COLORS['blue-sky-500']};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: ${spin} 1s linear infinite;
  text-align: center;
  aspect-ratio: 1/1;
  object-fit: fill;
`
