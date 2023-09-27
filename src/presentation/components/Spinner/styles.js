import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: 5px solid #5490f9;
  border-top: 5px solid #021e4c;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  animation: ${spin} 1s linear infinite;
  text-align: center;
`
