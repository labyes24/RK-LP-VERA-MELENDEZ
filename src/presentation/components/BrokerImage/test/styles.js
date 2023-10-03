import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr 1fr;

  gap: 1.6rem;
  justify-items: center;

  > div:nth-child(1) {
    justify-self: center;
  }

  > div:nth-child(2) {
    justify-self: start;
  }

  @media (min-width: 650px) {
    > div:nth-child(1) {
      justify-self: start;
    }
  }
`
