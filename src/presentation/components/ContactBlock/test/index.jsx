import { Container } from './styles'
import { ContactBlock } from '../index'
import { useBrokerProfile } from '../../../../data/BrokerData'

export function ContactBlockTest() {
  const { email, phone, address } = useBrokerProfile()

  return (
    <Container>
      <ContactBlock
        address={`${address.street}, ${address.number} ${address.district} - ${address.city}-${address.state}`}
        email={email}
        phoneNumber={phone}
      />
    </Container>
  )
}
