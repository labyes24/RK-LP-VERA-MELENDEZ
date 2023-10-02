import { useState } from 'react'

import { Modal } from '../index'
import { Container } from './styles'

export function ModalTest() {
  // state que define se o modal está aberto ou fechado, utilizado na prop isOpen (linha 18)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // função para abrir/fechar o modal, utilizada na prop toggleFn (linha 18)
  function toggleModal() {
    setIsModalOpen(previous => !previous)
  }

  return (
    <Container>
      {/* botão para abrir o modal */}
      <button onClick={toggleModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} toggleFn={toggleModal} />
    </Container>
  )
}
