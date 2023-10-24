import { styled } from 'styled-components'

export const TextInputContainer = styled.input`
  background-color: ${({ theme }) => theme.COLORS['zinc-50']};
  border: 1px solid ${({ theme }) => theme.COLORS['blue-sky-600']};
  color: ${({ theme }) => theme.COLORS['blue-sky-700']};

  border-radius: 8px;
  padding: 10px 16px;

  font-family: Roboto;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS['zinc-200']};
  }

  &:not(:focus):not(:placeholder-shown):invalid {
    border: 1px solid ${({ theme }) => theme.COLORS.tomate};
    outline: 1px solid ${({ theme }) => theme.COLORS.tomate};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS['blue-sky-500']};
  }

  &:disabled {
    filter: contrast(0.75);
    cursor: not-allowed;
  }
`
