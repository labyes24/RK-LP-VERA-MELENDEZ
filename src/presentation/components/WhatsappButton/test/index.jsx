import { Container } from './style'
import { WhatsappButton } from '../../WhatsappButton'

const personData = {
  number: '19983251470',
  message: 'Olá, gostaria de saber mais sobre o imóvel.',
}

export function WhatsappButtonTest() {
  return (
    <Container>
      <WhatsappButton personData={personData} />
    </Container>
  )
}
