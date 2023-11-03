import { useState } from 'react'

import { Modal } from '../index'
import { Container } from './styles'

export function ModalTest() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  function handleToggleModal() {
    setIsModalOpen(previous => !previous)
  }

  return (
    <Container>
      <button onClick={handleToggleModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} onCloseModal={handleCloseModal} />
    </Container>
  )
}
