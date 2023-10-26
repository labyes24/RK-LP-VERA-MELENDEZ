import { Card } from '../../components/Card'
import { Container } from './styles'

export function Profile() {
  return (
    <Container>
      <section>
        <Card quote={'teste'} author={'testador'} />
        <Card quote={'teste'} author={'testador'} />
        <Card quote={'teste'} author={'testador'} />
        <Card quote={'teste'} author={'testador'} />
      </section>
    </Container>
  )
}
