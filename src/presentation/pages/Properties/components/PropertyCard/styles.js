import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  padding: 3.2rem 1.6rem;
  gap: 1.6rem;
  border-radius: 0.8rem;
  width: 36rem;
  background-color: ${({ theme }) => theme.COLORS['blue-titan']};

  @media (min-width: 1024px) {
    display: flex;
    gap: 4.8rem;
    padding: 4.8rem;
    border-radius: 1.6rem;

    width: 105.8rem;
  }
`
export const ImageSection = styled.section`
  border-radius: 0.8rem;
  background-color: red;

  aspect-ratio: 16/9;

  @media (min-width: 1024px) {
    width: 50%;
    height: unset;
  }
`
