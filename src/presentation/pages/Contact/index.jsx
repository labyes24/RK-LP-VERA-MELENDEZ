import { Container } from './styles'
import { BrokerImage } from '../../components/BrokerImage'
import { ContactBlock } from '../../components/ContactBlock'

export function Contact() {
  return (
    <Container>
      <div className="titles">
        <h1>Aproveite agora e encontre seu lar dos sonhos!</h1>
        <p>O primeiro passo é preencher esse formulário</p>
      </div>
      <div className="form">Loading form...</div>
      <ContactBlock
        address={'Rua das Gaivotas, 1709 - Ingleses Florianópolis - SC'}
        email={'winnetou@rkimoveis.com.br'}
        phoneNumber={'(48) 98826-2951'}
      />
      <BrokerImage removeelipses={true} />
    </Container>
  )
}
