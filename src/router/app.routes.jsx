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
import { ButtonTest } from '../presentation/components/Button/test'
import { InputTextTest } from '../presentation/components/TextInput/test'
import { FooterTest } from '../presentation/components/Footer/test'
import { ContactBlockTest } from '../presentation/components/ContactBlock/test'
import { Contact } from '../presentation/pages/Contact'
import { SelectOptionTest } from '../presentation/components/SelectOption/test'
import { TextAreaTest } from '../presentation/components/TextArea/test'
import { ContactFormTest } from '../presentation/pages/Contact/components/ContactForm/test'
import { PropertyCardTest } from '../presentation/pages/Properties/components/PropertyCard/test'
import { CarouselTest } from '../presentation/components/Carousel/test'

import { Profile } from '../presentation/pages/Profile'
import { Home } from '../presentation/pages/Home'
import { Properties } from '../presentation/pages/Properties'
import { PrivatePolicy } from '../presentation/pages/PrivatePolicy'
export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h2>Rota inexistente</h2>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privatePolicy" element={<PrivatePolicy />} />
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
      <Route path="/Button" element={<ButtonTest />} />
      <Route path="/TextInputTest" element={<InputTextTest />} />
      <Route path="/Footer" element={<FooterTest />} />
      <Route path="/ContactBlock" element={<ContactBlockTest />} />
      <Route path="/SelectOptionTest" element={<SelectOptionTest />} />
      <Route path="/TextAreaTest" element={<TextAreaTest />} />
      <Route path="/ContactFormTest" element={<ContactFormTest />} />
      <Route path="/PropertyCard" element={<PropertyCardTest />} />
      <Route path="/Carousel" element={<CarouselTest />} />
    </Routes>
  )
}
