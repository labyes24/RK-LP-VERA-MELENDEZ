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
      <div className="small-button">
        <Button>Botão pequeno</Button>
      </div>

      <div className="large-button">
        <Button size="large">Botão Grande</Button>
      </div>

      <div className="large-button-2">
        <Button onClick={handleLoading} isLoading={isLoading} size="large">
          Clique aqui para carregar
        </Button>
      </div>
    </Container>
  )
}
