import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />

      <div className="content">
        <Outlet />
      </div>

      <Footer />
      <ToastContainer />
    </LayoutContainer>
  )
}
