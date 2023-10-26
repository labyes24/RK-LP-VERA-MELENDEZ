import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  > section {
    padding-inline: 2.4rem;

    display: flex;
    align-items: center;
    gap: 4.8rem;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (min-width: 650px) {
      padding: 0;
    }
  }
`
