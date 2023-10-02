import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 3rem;
    background: ${({ theme }) => theme.COLORS['zinc-400']};
    border: transparent;
    color: #fff;
    cursor: pointer;
  }
`
