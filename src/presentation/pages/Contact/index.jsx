import { Container } from './styles'
import { BrokerImage } from '../../components/BrokerImage'
import { ContactBlock } from '../../components/ContactBlock'
import { ContactForm } from './components/ContactForm'

export function Contact() {
  return (
    <Container>
      <div className="titles">
        <h1>Aproveite agora e encontre seu lar dos sonhos!</h1>
        <p>O primeiro passo é preencher esse formulário</p>
      </div>
      <div className="form">
        <ContactForm />
      </div>
      <div className="contact">
        <ContactBlock
          address={'Rua das Gaivotas, 1709 - Ingleses Florianópolis - SC'}
          email={'winnetou@rkimoveis.com.br'}
          phoneNumber={'(48) 98826-2951'}
        />
        <div className="image">
          <BrokerImage removeelipses={true} />
        </div>
      </div>
    </Container>
  )
}
