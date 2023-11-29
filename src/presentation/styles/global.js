import { createGlobalStyle } from 'styled-components'
import '@splidejs/react-splide/css'

export const GlobalStyle = createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.GRADIENTS.background};
    color: ${({ theme }) => theme.COLORS.white};
    font-family: ${props => props.theme.FONTS.Primary};
    font-size: 1.6rem;
    min-height: 99vh;  
  }

  body::-webkit-scrollbar {
    width: 8px;
  }
  body::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS['zinc-150']};
    border-radius: 10px;
    }
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS['blue-sky-50']};
    border-radius: 10px;
  }
  body::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS['blue-sky-100']};    
  }
  body::-webkit-scrollbar-thumb:active {
    background-color: ${({ theme }) => theme.COLORS['blue-sky-50']};
  }

  #root {
    display: flex;
    justify-content: center;
    min-height: 99vh;
  
  }
`
