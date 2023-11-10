import { RealEstateBrokerDescription } from '../index'
import { Container } from './styles'
import { useBrokerProfile } from '../../../../../../data/BrokerData'

export function RealEstateBrokerDescriptionTest() {
  const brokerProfile = useBrokerProfile()

  return (
    <Container>
      <RealEstateBrokerDescription brokerData={brokerProfile} />
    </Container>
  )
}
