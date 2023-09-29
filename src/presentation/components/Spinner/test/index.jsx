import { Spinner } from '../index'
import { Container, Button } from './styles'
import { useState } from 'react'

export function SpinnerTest() {
  const [loading, setLoading] = useState(false)
  const renderBtn = <Button onClick={handleLoading}>Carregar</Button>

  function handleLoading() {
    setLoading(true)
  }

  return (
    <Container>
      {loading ? (
        <Button onClick={() => setLoading(false)}>
          <Spinner />
        </Button>
      ) : (
        renderBtn
      )}
    </Container>
  )
}
