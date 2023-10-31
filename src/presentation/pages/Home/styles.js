import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 113rem;
  margin: 4rem auto;
  padding-bottom: 4rem;

  > h2 {
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    font-size: 4rem;
    font-weight: 400;
    text-align: center;
  }

  .cards-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.4rem;
  }
`