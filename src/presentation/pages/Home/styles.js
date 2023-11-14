import styled from 'styled-components'
import backgroundImg from '../../assets/backgroundImg.png'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;

  > .bg-img {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;

    background-image: url(${backgroundImg});
    background-size: cover;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 113rem;
  margin: 4rem auto;

  > h2 {
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    font-size: 4rem;
    font-weight: 400;
    text-align: center;
  }
  @media (min-width: 320px) {
    > h2 {
      font-size: 2.2rem;
    }
  }

  @media (min-width: 768px) {
    > h2 {
      font-size: 3.2rem;
    }
  }
`
