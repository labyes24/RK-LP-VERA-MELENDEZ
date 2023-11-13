import { Container, Content } from './styles'
import { Video } from '../../components/Video'
import { Card } from '../../components/Card'
import { WhatsappButton } from '../../components/WhatsappButton'

import { useBrokerProfile } from '../../../data/BrokerData'

export function Home() {
  const broker = useBrokerProfile()
  const quotes = broker.comments
  const brokerPhoneNumber = broker.phone

  return (
    <Container>
      <div className="bg-img" />
      <Content>
        <h2>Oportunidades únicas não esperam por ninguém!</h2>
        <Video />
        <div className="cards-wrapper">
          {quotes.map(quote => (
            <Card key={quote.id} {...quote} />
          ))}
        </div>
      </Content>
      <WhatsappButton phoneNumber={brokerPhoneNumber} />
    </Container>
  )
}
