import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  main {
    width: 45rem;
    height: 54rem;
    margin: 2rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    flex: 0 1 1;
    gap: 2.5rem;

    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS['blue-titan']};

    @media (max-width: 320px) {
      width: 33rem;
    }

    @media (min-width: 768px) {
      width: 40rem;
    }
  }

  h2 {
    width: 100%;
    color: ${({ theme }) => theme.COLORS['blue-sky-700']};

    font-size: 3.6rem;
    font-family: ${({ theme }) => theme.FONTS.Primary};
    font-weight: 700;
  }
`

export const TagsWrapper = styled.span`
  width: 100%;
  display: flex;
  gap: 1.1rem;
  flex: auto;
`
