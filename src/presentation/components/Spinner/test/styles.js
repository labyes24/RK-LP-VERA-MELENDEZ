import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 20rem auto 20rem;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  display: flex;
  width: 21rem;
  height: 3rem;
  padding: 8px 88px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.COLORS.white};
  font-family: ${({ theme }) => theme.FONTS.Primary};
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.COLORS['blue-sky-600']};
`
