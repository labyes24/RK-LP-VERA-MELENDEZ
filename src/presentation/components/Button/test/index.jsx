import { Button } from '../index'

import { Container } from './styles'

export function ButtonTest() {
  return (
    <Container>
      <Button>Botão</Button>

      <Button size="large">Botão Grande</Button>

      <Button isLoading size="large">
        Botão Grande
      </Button>
    </Container>
  )
}
