import { Container } from './styles'
import { ContactBlock } from '../index'

const ADDRESS_OBJECT = {
  place: {
    street: 'Rua das Gaivotas',
    number: '1709',
    district: 'Ingleses',
    city: 'Florianópolis',
  },
}

const TEST_OBJECT = [
  {
    address: ADDRESS_OBJECT.place,
    email: 'winnetou@rkimoveis.com.br',
    phoneNumber: '(48) 98826-2951',
  },
  {
    address: ADDRESS_OBJECT.place,
    email: 'labyes@email.com',
    phoneNumber: '(00) 00000-0000',
  },
]

export function ContactBlockTest() {
  return (
    <Container>
      <ContactBlock objectProps={TEST_OBJECT} />
    </Container>
  )
}
