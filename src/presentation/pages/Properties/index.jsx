import { Container } from './styles'
import { useProperties } from '../../../data/RealStateData'
import { Carousel } from '../../components/Carousel'
import { SplideSlide } from '@splidejs/react-splide'
import { PropertyCard } from './components/PropertyCard'
import { WhatsappButton } from '../../components/WhatsappButton'
export function Properties() {
  const properties = useProperties()
  return (
    <Container>
      <h1>Encontre o imóvel perfeito para você e sua família!</h1>
      <Carousel option="cardProperty" length={properties.length}>
        {properties.map(property => (
          <SplideSlide key={property.id}>
            <PropertyCard propertyInfo={property} />
          </SplideSlide>
        ))}
      </Carousel>
      <WhatsappButton />
    </Container>
  )
}
