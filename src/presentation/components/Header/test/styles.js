import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 144rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding: 0 2rem;
  @media (min-width: 1024px) {
    padding: 0 4.8rem;
  }

  .content {
    flex: 1;
  }
`
