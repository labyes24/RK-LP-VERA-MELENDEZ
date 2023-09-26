import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS['zinc-500']};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  border-radius: 8px;
  padding: 3.2rem 1.6rem;
  gap: 2.4rem;

  max-width: 28rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > blockquote {
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    color: ${({ theme }) => theme.COLORS.white};
    font-style: italic;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.4;
  }

  > cite {
    font-family: ${({ theme }) => theme.FONTS.Primary};
    color: ${({ theme }) => theme.COLORS['blue-sky']};
    font-weight: bold;
    font-style: normal;
    font-size: 1.6rem;
    line-height: 1;
  }
`
