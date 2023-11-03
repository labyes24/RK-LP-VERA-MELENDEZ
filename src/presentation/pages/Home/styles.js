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

  .cards-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2.8rem;

    margin: 0 auto;
    width: 100%;
    max-width: 113rem;
    padding-bottom: 1rem;

    width: calc(100% - 0.5rem);
    min-height: 20rem;

    overflow-x: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 8px;
      background-color: ${({ theme }) => theme.COLORS['zinc-100']};
    }

    &::-webkit-scrollbar-track:hover {
      background-color: ${({ theme }) => theme.COLORS['zinc-150']};
    }

    &::-webkit-scrollbar-track:active {
      background-color: ${({ theme }) => theme.COLORS['zinc-150']};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: ${({ theme }) => theme.COLORS['blue-sky']};
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.COLORS['blue-sky-50']};
    }

    &::-webkit-scrollbar-thumb:active {
      background-color: ${({ theme }) => theme.COLORS['blue-sky-50']};
    }
  }

  @media (min-width: 320px) {
    > h2 {
      font-size: 2.2rem;
    }
    .cards-wrapper {
      gap: 1rem;
    }
  }

  @media (min-width: 768px) {
    > h2 {
      font-size: 3.2rem;
    }
    .cards-wrapper {
      gap: 2rem;
    }
  }
`
