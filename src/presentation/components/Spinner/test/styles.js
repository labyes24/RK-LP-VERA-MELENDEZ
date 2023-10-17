import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  display: flex;
  margin: -40rem auto -20rem;
  width: 21rem;
  height: 3rem;
  padding: 8px 88px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.COLORS.white};
  font-family: ${({ theme }) => theme.FONTS.Primary};
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.COLORS['blue-sky-600']};
`
