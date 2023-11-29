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
  @keyframes appear {
    from {
      transform: translateY(-10vh);
      opacity: 0;
    }
  }

  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin: 4rem auto;

  animation: appear ease-in 1.8s;

  .splide__arrow {
    height: 2rem;
    width: 2rem;
    top: 40%;
    svg {
      fill: ${({ theme }) => theme.COLORS['blue-sky-700']};
      height: 1rem;
      width: 1rem;
    }
  }
  .splide__arrow--prev {
    left: 0.5rem;
  }

  .splide__arrow--next {
    right: 0.5rem;
  }

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
    .splide__arrow {
      height: 3rem;
      width: 3rem;
      svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }
`
