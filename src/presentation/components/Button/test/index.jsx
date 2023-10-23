import { useState } from 'react'

import { Button } from '../index'
import { Container } from './styles'

export function ButtonTest() {
  const [isLoading, setIsLoading] = useState(false)

  function handleLoading() {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <Container>
      <Button>Botão pequeno</Button>

      <Button size="large">Botão Grande</Button>

      <Button onClick={handleLoading} isLoading={isLoading} size="large">
        Clique aqui para carregar
      </Button>
    </Container>
  )
}
