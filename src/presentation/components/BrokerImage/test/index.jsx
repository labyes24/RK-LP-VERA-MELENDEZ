import { Container } from './styles'
import { BrokerImage } from '../../BrokerImage'

export function BrokerImageTest() {
  return (
    <Container>
      <BrokerImage />
      <BrokerImage removeelipses />
    </Container>
  )
}
