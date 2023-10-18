import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <header>
        <h1>Header</h1>
      </header>

      <div className="content">
        <Outlet />
      </div>

      <footer>
        <p>Footer</p>
      </footer>
    </LayoutContainer>
  )
}
