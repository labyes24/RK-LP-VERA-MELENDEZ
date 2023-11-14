import { Container, Content } from './styles'
import { Video } from '../../components/Video'
import { Card } from '../../components/Card'
import { WhatsappButton } from '../../components/WhatsappButton'
import { SplideSlide } from '@splidejs/react-splide'
import { Carousel } from '../../components/Carousel'

import { useBrokerProfile } from '../../../data/BrokerData'

export function Home() {
  const broker = useBrokerProfile()
  const { comments: quotes } = useBrokerProfile()
  const brokerPhoneNumber = broker.phone

  return (
    <Container>
      <div className="bg-img" />
      <Content>
        <h2>Oportunidades únicas não esperam por ninguém!</h2>
        <Video />
        <Carousel option="card" length={quotes.length}>
          {quotes.map(quote => (
            <SplideSlide key={quote.id}>
              <Card {...quote} />
            </SplideSlide>
          ))}
        </Carousel>
      </Content>
      <WhatsappButton phoneNumber={brokerPhoneNumber} />
    </Container>
  )
}
