import { Container } from './styles'
import { BrokerImage } from '../../components/BrokerImage'
import { ContactBlock } from '../../components/ContactBlock'
import { ContactForm } from './components/ContactForm'

import { useBrokerProfile } from '../../../data/BrokerData'

export function Contact() {
  const broker = useBrokerProfile()
  const brokerAddress = broker.address
  const brokerEmail = broker.email
  const brokerPhoneNumber = broker.phone

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
          address={`${brokerAddress.street}, ${brokerAddress.number} ${brokerAddress.district} ${brokerAddress.city}-${brokerAddress.state}`}
          email={brokerEmail}
          phoneNumber={brokerPhoneNumber}
        />
        <div className="image">
          <BrokerImage removeelipses={true} />
        </div>
      </div>
    </Container>
  )
}
