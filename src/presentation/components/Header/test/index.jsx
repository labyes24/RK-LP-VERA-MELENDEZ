import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import { Header } from '..'

export function HeaderTest() {
  return (
    <Container>
      <Header />
      <div className="content">
        <Outlet />
      </div>

      <footer>
        <p>Footer</p>
      </footer>
    </Container>
  )
}
