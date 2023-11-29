import styled from 'styled-components'

export const Container = styled.div`
  .Images {
    width: fit-content;
    display: ${({ $removeelipses }) => ($removeelipses ? 'none' : 'flex')};

    position: relative;
    left: ${({ $removeelipses }) => ($removeelipses ? '-10px' : 'none')};

    :nth-child(1) {
      position: ${({ $removeelipses }) =>
        $removeelipses ? 'initial' : 'absolute'};
      top: ${({ $removeelipses }) => ($removeelipses ? 'initial' : '-25%')};
    }
  }

  > div img:nth-child(1) {
    ${({ $removeelipses }) => ($removeelipses ? null : 'position : absolute')};
    filter: drop-shadow(-10px 0px 4px rgba(0, 0, 0, 0.4));
  }

  > div img:nth-child(2) {
    position: relative;
    z-index: -1;

    margin: 10px 0 0 0px; //margin para alinhar corretamente o círculo com o CorretorImg conforme o figma
  }

  > div img:nth-child(1),
  > div img:nth-child(2) {
    width: 17rem;
  }

  @media (min-width: 650px) {
    > div img:nth-child(1) {
      width: 17rem;
    }

    > div img:nth-child(2) {
      width: 17rem;
    }

    .Images {
      display: flex;
      width: fit-content;
    }

    > div img:nth-child(1) {
      width: clamp(12.8rem, 1.2rem + 37.18vw, 42.7rem);
      ${({ $removeelipses }) =>
        $removeelipses ? null : 'position : absolute'};
    }

    > div img:nth-child(2) {
      position: relative;
      z-index: -1;
      width: clamp(12.8rem, 1rem + 37.18vw, 42.7rem);
      margin: 10px 0 0 0px; //margin para alinhar corretamente o círculo com o CorretorImg conforme o figma
    }
  }
`
