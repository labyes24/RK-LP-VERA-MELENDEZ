import { Spinner } from '../index'
import { Container, Button } from './styles'
import { useState, useEffect } from 'react'

export function SpinnerTest() {
  const [loading, setLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const renderBtn = (
    <Button onClick={() => setLoading(true)}>
      {loading ? <Spinner size={'small'} /> : 'Carregar'}
    </Button>
  )

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000)
  }, [])

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  })

  return <Container>{isLoading ? <Spinner /> : renderBtn}</Container>
}
