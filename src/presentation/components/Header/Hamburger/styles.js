import styled from 'styled-components'

export const Container = styled.div`
  @keyframes appear {
    from {
      transform: translateY(-10vh);
      opacity: 0;
    }
  }
  ${({ $opened }) => ($opened ? 'position: fixed;' : '')};
  ${({ $opened }) => ($opened ? 'right: 2rem;' : '')};

  animation: appear 1s;

  z-index: 5;

  input {
    display: none;
  }

  label {
    position: relative;
    width: 36px;
    height: 36px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 6px;
    transition-duration: 1s;
    transform-origin: 2rem center;
  }

  span {
    width: 100%;
    height: 5px;
    background-color: ${({ theme }) => theme.COLORS.white};
    border-radius: 4px;
  }

  span:nth-child(2) {
    transition-duration: 1s;
    width: 75%;
  }

  input:checked + label {
    transition-duration: 1s;
    transform: rotate(180deg);
  }

  input:checked + label span {
    position: absolute;
    transition-duration: 1s;
    background-color: ${({ theme }) => theme.COLORS['blue-sky-700']};
  }

  input:checked + label span:first-child {
    width: 75%;
    transform: rotate(45deg);
    transition-duration: 1s;
  }

  input:checked + label span:nth-child(2) {
    transform: scaleX(0);
    transition-duration: 1s;
  }

  input:checked + label span:last-child {
    width: 75%;
    transform: rotate(-45deg);
    transition-duration: 1s;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`
