import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './presentation/styles/themes/default'
import { GlobalStyle } from './presentation/styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>RK Landing Page</h1>
    </ThemeProvider>
  )
}

export default App
