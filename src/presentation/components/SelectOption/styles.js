import { styled } from 'styled-components'

import ChevronDown from '../../assets/chevron-down.svg'
export const SelectContainer = styled.select`
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
  resize: none;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;

  cursor: pointer;
  padding-right: 4rem;

  background-image: url(${ChevronDown});
  background-repeat: no-repeat;
  background-size: 2.4rem;
  background-position: bottom 50% right 1.6rem;

  &:invalid {
    color: ${({ theme }) => theme.COLORS['zinc-200']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS['zinc-200']};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS['blue-sky-500']};
  }

  &:disabled {
    filter: contrast(0.75);
    cursor: not-allowed;
  }

  > option {
    color: ${({ theme }) => theme.COLORS['blue-sky-700']};
  }
`
