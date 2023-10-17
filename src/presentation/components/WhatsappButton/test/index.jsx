import { Container } from './style'
import { WhatsappButton } from '../../WhatsappButton'

const personData = {
  number: '19996546371',
  message: 'Olá, gostaria de saber mais sobre o imóvel.',
}

export function WhatsappButtonTest() {
  return (
    <Container>
      <WhatsappButton
        message={personData.message}
        phoneNumber={personData.number}
      />
    </Container>
  )
}
