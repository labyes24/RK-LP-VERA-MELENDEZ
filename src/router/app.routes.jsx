import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../presentation/layouts/DefaultLayout'

import { HeaderTest } from '../presentation/components/Header/test'
import { SpinnerTest } from '../presentation/components/Spinner/test'
import { BrokerImageTest } from '../presentation/components/BrokerImage/test'
import { ModalTest } from '../presentation/pages/Properties/components/Modal/test'
import { VideoTest } from '../presentation/components/Video/test'
import { WhatsappButtonTest } from '../presentation/components/WhatsappButton/test/index'
import { CardTest } from '../presentation/components/Card/test'
import { TagsTest } from '../presentation/components/Tag/test'
import { RealEstateBrokerDescriptionTest } from '../presentation/pages/Profile/components/RealEstateBrokerDescription/test'

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<h1>RK Landing Page</h1>} />
        <Route path="*" element={<h2>Rota inexistente</h2>} />
        <Route path="/profile" element={<h2>profile</h2>} />
        <Route path="/properties" element={<h2>properties</h2>} />
        <Route path="/contact" element={<h2>contact</h2>} />
      </Route>

      {/* Test Routes */}
      <Route path="/header" element={<HeaderTest />}>
        <Route path="/header/profile" element={<h2>profile</h2>} />
        <Route path="/header/properties" element={<h2>properties</h2>} />
        <Route path="/header/contact" element={<h2>contact</h2>} />
      </Route>

      <Route path="/Video" element={<VideoTest />} />
      <Route path="/RealEstateBrokerImage" element={<BrokerImageTest />} />
      <Route
        path="/RealEstateBrokerDescription"
        element={<RealEstateBrokerDescriptionTest />}
      />
      <Route path="/Spinner" element={<SpinnerTest />} />
      <Route path="/Card" element={<CardTest />} />
      <Route path="/Modal" element={<ModalTest />} />
      <Route path="/WhatsappButton" element={<WhatsappButtonTest />} />
      <Route path="/Tags" element={<TagsTest />} />
      <Route path="*" element={<h2>Rota inexistente</h2>} />
    </Routes>
  )
}
