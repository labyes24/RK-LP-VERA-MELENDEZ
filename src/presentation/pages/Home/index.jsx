import { Container, Content } from './styles'
import { Video } from '../../components/Video'
import { Card } from '../../components/Card'
import { WhatsappButton } from '../../components/WhatsappButton'

export function Home() {
  return (
    <Container>
      <Content>
        <h2>Oportunidades únicas não esperam por ninguém!</h2>
        <Video />
        <Card />
      </Content>
      <WhatsappButton />
    </Container>
  )
}
