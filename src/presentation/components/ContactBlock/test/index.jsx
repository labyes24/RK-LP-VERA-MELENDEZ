import { Container } from './styles'
import { ContactBlock } from '../index'

const ContactData = {
  address: 'Rua das Gaivotas, 1709 - Ingleses Florianópolis - SC',
  email: 'winnetou@rkimoveis.com.br',
  phoneNumber: '(48) 98826-2951',
}

export function ContactBlockTest() {
  return (
    <Container>
      <ContactBlock
        address={ContactData.address}
        email={ContactData.email}
        phoneNumber={ContactData.phoneNumber}
      />
    </Container>
  )
}
