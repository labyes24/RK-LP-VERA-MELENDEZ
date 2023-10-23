import styled from 'styled-components'

export const Container = styled.span`
  height: 3.2rem;
  padding: 0.4rem;

  display: inline-flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;

  border: 1px solid ${({ theme }) => theme.COLORS['zinc-150']};
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.COLORS.white};

  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.FONTS.Primary};
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS['blue-sky-700']};
`
