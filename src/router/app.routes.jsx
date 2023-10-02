import { Routes, Route } from 'react-router-dom'
import { SpinnerTest } from '../presentation/components/Spinner/test'

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<h1>RK Landing Page</h1>} />
      <Route path="/Video" element={<h2>Video</h2>} />
      <Route
        path="/RealEstateBrokerImage"
        element={<h2>RealEstateBrokerImage</h2>}
      />
      <Route
        path="/RealEstateBrokerDescription"
        element={<h2>RealEstateBrokerDescription</h2>}
      />
      <Route path="/Spinner" element={<SpinnerTest />} />
      <Route path="/Card" element={<h2>Card</h2>} />
      <Route path="/WhatsappButton" element={<h2>WhatsappButton</h2>} />
      <Route path="*" element={<h2>Rota inexistente</h2>} />
    </Routes>
  )
}
