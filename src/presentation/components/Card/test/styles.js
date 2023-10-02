import styled from 'styled-components'

export const CardTestContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 1.5rem;
  gap: 1rem;

  .row-group {
    min-width: 42rem;
    min-height: 20rem;

    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;

    overflow-x: auto;
    overflow-y: hidden;

    padding-bottom: 1rem;

    /* Scroll Bar */

    /* Firefox */
    & {
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) => theme.COLORS['blue-sky']}
        ${({ theme }) => theme.COLORS['zinc-100']};
    }

    /* Chrome, Edge and Safari */
    &::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 8px;
      background-color: ${({ theme }) => theme.COLORS['zinc-100']};
    }

    &::-webkit-scrollbar-track:hover {
      background-color: ${({ theme }) => theme.COLORS['zinc-150']};
    }

    &::-webkit-scrollbar-track:active {
      background-color: ${({ theme }) => theme.COLORS['zinc-150']};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: ${({ theme }) => theme.COLORS['blue-sky']};
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.COLORS['blue-sky-50']};
    }

    &::-webkit-scrollbar-thumb:active {
      background-color: ${({ theme }) => theme.COLORS['blue-sky-50']};
    }
  }
`
