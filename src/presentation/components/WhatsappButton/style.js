import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  border: none;

  a {
    position: fixed;
    bottom: 2.2rem;
    right: 3.2rem;

    z-index: 999;

    transition: all 0.3s ease-in;

    > svg {
      > g {
        :nth-child(1) {
          fill: ${({ theme }) => theme.COLORS.white};
        }

        :nth-child(2) {
          fill: ${({ theme }) => theme.COLORS['blue-sky-500']};
        }

        :nth-child(3) {
          fill: ${({ theme }) => theme.COLORS.white};
        }
      }
    }

    &:hover {
      transform: scale(1.1);
      filter: brightness(150%);
    }

    @media (max-width: 768px) {
      > img {
        width: 5.8rem;
        height: 5.8rem;
      }
    }
  }
`
