import { Routes, Route } from 'react-router-dom'
import { SpinnerTest } from '../presentation/components/Spinner/test'
import { BrokerImageTest } from '../presentation/components/BrokerImage/test'
import { ModalTest } from '../presentation/pages/Properties/components/Modal/test'
import { VideoTest } from '../presentation/components/Video/test'
import { WhatsappButtonTest } from '../presentation/components/WhatsappButton/test/index'
import { CardTest } from '../presentation/components/Card/test'

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<h1>RK Landing Page</h1>} />
      <Route path="/Video" element={<VideoTest />} />
      <Route path="/RealEstateBrokerImage" element={<BrokerImageTest />} />
      <Route
        path="/RealEstateBrokerDescription"
        element={<h2>RealEstateBrokerDescription</h2>}
      />
      <Route path="/Spinner" element={<SpinnerTest />} />
      <Route path="/Card" element={<CardTest />} />
      <Route path="/WhatsappButton" element={<h2>WhatsappButton</h2>} />
      <Route path="/Modal" element={<ModalTest />} />
      <Route path="/WhatsappButton" element={<WhatsappButtonTest />} />
      <Route path="*" element={<h2>Rota inexistente</h2>} />
    </Routes>
  )
}
