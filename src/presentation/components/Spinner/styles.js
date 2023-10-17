import styled from 'styled-components'
import { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
   transform: rotate(0deg);
  }

  100% {
      transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  border: 6px solid ${({ theme }) => theme.COLORS['blue-sky']};
  border-top-color: ${({ theme }) => theme.COLORS['blue-sky-500']};
  border-radius: 50%;
  width: 8rem;
  animation: ${spin} 1s linear infinite;
  aspect-ratio: 1/1;
`
export const SmallLoader = styled.div`
  border: 2px solid ${({ theme }) => theme.COLORS['blue-sky']};
  border-top-color: ${({ theme }) => theme.COLORS['blue-sky-500']};
  border-radius: 50%;
  width: 2rem;
  animation: ${spin} 1s linear infinite;
  text-align: center;
  aspect-ratio: 1/1;
`
