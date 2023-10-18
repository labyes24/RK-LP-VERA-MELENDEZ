import { Container } from './styles'

export function Tag({ title, src }) {
  return (
    <Container>
      <img src={src} alt="Ícone" />
      {title}
    </Container>
  )
}
