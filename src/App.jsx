import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './presentation/styles/themes/default'
import { GlobalStyle } from './presentation/styles/global'
import { Router } from './router'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
