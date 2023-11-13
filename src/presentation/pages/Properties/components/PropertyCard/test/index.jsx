import { Container } from './styles'
import { PropertyCard } from '../'
import { useProperties } from '../../../../../../data/RealStateData'
export function PropertyCardTest() {
  const properties = useProperties()
  return (
    <Container>
      <PropertyCard propertyInfo={properties[0]} />
    </Container>
  )
}
