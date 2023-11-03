import { useState } from 'react'

import { Modal } from '../index'
import { Container } from './styles'

export function ModalTest() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <Container>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} closeFn={closeModal} />
    </Container>
  )
}
