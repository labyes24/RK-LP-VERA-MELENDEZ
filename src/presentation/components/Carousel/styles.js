import styled from 'styled-components'
import { Splide } from '@splidejs/react-splide'

export const ContainerSplide = styled(Splide)`
  .splide__track {
    padding-bottom: 4rem;
  }
  .splide__arrow {
    svg {
      fill: ${({ theme }) => theme.COLORS['blue-sky-700']};
    }
  }
  @media screen and (min-width: 1024px) {
    .splide__arrow {
      height: 4rem;
      width: 4rem;
      svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }
`
