import { Card } from '../../components/Card'
import { RealEstateBrokerDescription } from './components/RealEstateBrokerDescription'
import { Container } from './styles'
import { useBrokerProfile } from '../../../data/BrokerData'

export function Profile() {
  const brokerProfile = useBrokerProfile()

  return (
    <Container>
      <RealEstateBrokerDescription brokerData={brokerProfile} />

      <section>
        {brokerProfile.tips.map(quote => (
          <Card key={quote.id} {...quote} />
        ))}
      </section>
    </Container>
  )
}
