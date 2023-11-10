import { Container } from './styles'
import { Carousel } from '..'
import { SplideSlide } from '@splidejs/react-splide'
import { Card } from '../../Card'
import { PropertyCard } from '../../../pages/Properties/components/PropertyCard'
import { useProperties } from '../../../../data/RealStateData'
import { useBrokerProfile } from '../../../../data/BrokerData'

export function CarouselTest() {
  const properties = useProperties()
  const { comments: quotes } = useBrokerProfile()
  return (
    <Container>
      <Carousel option="card" length={quotes.length}>
        {quotes.map(quote => (
          <SplideSlide key={quote.id}>
            <Card {...quote} />
          </SplideSlide>
        ))}
      </Carousel>
      <Carousel option="cardProperty" length={properties.length}>
        {properties.map(property => (
          <SplideSlide key={property.id}>
            <PropertyCard propertyInfo={property} />
          </SplideSlide>
        ))}
      </Carousel>
    </Container>
  )
}
