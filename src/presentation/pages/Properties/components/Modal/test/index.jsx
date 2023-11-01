import { useState } from 'react'

import { Modal } from '../index'
import { Container } from './styles'

export function ModalTest() {
  // state que define se o modal está aberto ou fechado, utilizado na prop isOpen (linha 18)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // função para abrir o modal, utilizada na prop openFn (linha 25)
  function openModal() {
    setIsModalOpen(true)
  }

  // função para fechar o modal, utilizada na prop closeFn (linha 25)
  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <Container>
      {/* botão para abrir o modal */}
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} closeFn={closeModal} />
    </Container>
  )
}
