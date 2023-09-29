import styled from 'styled-components'

export const CardTestContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 1.5rem;
  gap: 1rem;
  overflow: hidden;

  .row-group {
    min-width: 42rem;

    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    overflow-x: auto;
  }
`
