import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: ${({ $size }) =>
    $size === 'large' ? '1.6rem 2.4rem' : '0.8rem 2.4rem'};

  border: none;
  color: ${({ theme }) => theme.COLORS.white};
  font-family: ${({ theme }) => theme.FONTS.Primary};
  font-size: ${({ $size }) => ($size === 'large' ? '2.4rem' : '1.6rem')};
  font-style: normal;
  font-weight: 700;
  border-radius: ${({ $size }) => ($size === 'large' ? '1rem' : '0.4rem')};
  background-color: ${({ theme }) => theme.COLORS['blue-sky-600']};

  cursor: pointer;
  transition: 0.3s background-color;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS['blue-hover']};
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ $size }) => ($size === 'large' ? '2.4rem' : '1.6rem 2.4rem')};
    font-size: ${({ $size }) => ($size === 'large' ? '3.6rem' : '1.8rem')};
  }
`
