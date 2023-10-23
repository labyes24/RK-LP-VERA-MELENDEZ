import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2.4rem;
  gap: 1rem;

  border: none;
  color: ${({ theme }) => theme.COLORS.white};
  font-family: ${({ theme }) => theme.FONTS.Primary};
  font-size: ${({ $size }) => ($size === 'large' ? '3.6rem' : '1.8rem')};
  font-style: normal;
  font-weight: 700;
  border-radius: ${({ $size }) => ($size === 'large' ? '1rem' : '0.4rem')};
  background-color: ${({ theme }) => theme.COLORS['blue-sky-600']};

  cursor: pointer;
  transition: 0.3s background-color;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS['blue-sky-700']};
  }
`
