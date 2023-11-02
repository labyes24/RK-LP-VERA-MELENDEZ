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
export const DescriptionSection = styled.section`
  display: grid;
  gap: 1.6rem;

  @media (min-width: 1024px) {
    display: grid;
    gap: 4.5rem;
    justify-items: space-between;
    align-content: space-around;

    width: 50%;
  }
`
export const Header = styled.div`
  font-style: normal;
  font-weight: 700;

  > h2 {
    color: ${({ theme }) => theme.COLORS['blue-sky-700']};
    font-size: 2.4rem;
    line-height: 100%;
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS['zinc-400']};
    font-size: 1.6rem;
    line-height: 100%;
  }

  @media (min-width: 1024px) {
    display: grid;
    gap: 1.6rem;
    > h2 {
      font-size: 3.6rem;
    }

    > h3 {
      font-size: 2.4rem;
    }
  }
`
export const Tags = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex: auto;
