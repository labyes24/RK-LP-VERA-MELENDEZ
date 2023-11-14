import { Container } from './styles'
import { useProperties } from '../../../data/RealStateData'
import { Carousel } from '../../components/Carousel'
import { SplideSlide } from '@splidejs/react-splide'
import { PropertyCard } from './components/PropertyCard'
import { WhatsappButton } from '../../components/WhatsappButton'
import { Modal } from './components/Modal'

import { useBrokerProfile } from '../../../data/BrokerData'
import { useState } from 'react'

export function Properties() {
  const properties = useProperties()
  const { phone } = useBrokerProfile()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [PropertyCodeInfo, setPropertyCodeInfo] = useState('')

  function handleGetPropertyCodeInfo(code) {
    setIsModalOpen(true)
    setPropertyCodeInfo(code)
  }

  return (
    <Container>
      <h1>Encontre o imóvel perfeito para você e sua família!</h1>
      <Carousel option="cardProperty" length={properties.length}>
        {properties.map(property => (
          <SplideSlide key={property.id}>
            <PropertyCard
              propertyInfo={property}
              onInterestingProperty={handleGetPropertyCodeInfo}
            />
          </SplideSlide>
        ))}
      </Carousel>
      <Modal
        isOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
        propertyCode={PropertyCodeInfo}
      />
      <WhatsappButton phoneNumber={phone} />
    </Container>
  )
}
