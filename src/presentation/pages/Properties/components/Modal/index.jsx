import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { sendMail } from '../../../../../services/sendMail'
import { useBrokerProfile } from '../../../../../data/BrokerData'

import { Button } from '../../../../components/Button'
import {
  Container,
  StyledModal,
  TitleGroup,
  Title,
  Description,
  Form,
  InputGroup,
} from './styles'

import closeIcon from '../../../../assets/x-close-icon.svg'

/**
 * Creates a styled Modal component.
 * @param {Boolean} isOpen - Modal state.
 * @param {requestCallback} onCloseModal - Cb function to change open modal state to false.
 * @param {String} propertyCode - Property code information.
 * @return {JSX.Element} The styled Modal component.
 */
export function Modal({ isOpen, onCloseModal, propertyCode }) {
  const [isLoading, setIsLoading] = useState(false)

  const { email } = useBrokerProfile()

  const devMode = import.meta.env.DEV

  let sendMailTo = devMode ? import.meta.env.VITE_EMAILJS_MAIL_TEST : email

  const handleSubmit = useCallback(
    event => {
      if (event && event.target) {
        event.preventDefault()

        setIsLoading(true)

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        const messageText = `Dados pessoais: \n
          Nome: ${data?.name ?? '(Informação não preenchida)'}
          Email: ${data?.email ? data?.email : '(Informação não preenchida)'}
          Whatsapp: ${data?.phone ?? '(Informação não preenchida)'}
          Código do Imóvel: ${propertyCode ?? '(Informação não preenchida)'}
          `

        sendMail(data.name, messageText, sendMailTo)
          .then(response => {
            onCloseModal()

            if (response.status === 200) {
              toast.success('Mensagem enviada com sucesso!')
              setIsLoading(false)
              event.target.reset()
            }
          })
          .catch(error => {
            toast.error(
              'Ocorreu um erro. \nPor favor, tente novamente mais tarde.',
            )
            console.error(error)
          })
      }
    },
    [onCloseModal, propertyCode, sendMailTo],
  )

  useEffect(() => {
    window.addEventListener('keyup', event => {
      if (event.key === 'Escape' && isOpen) onCloseModal()

      if (event.key === 'Enter' && isOpen) handleSubmit()
    })

    return () => {
      window.removeEventListener('keyup', event => {
        if (event.key === 'Escape' && isOpen) onCloseModal()

        if (event.key === 'Enter' && isOpen) handleSubmit()
      })
    }
  }, [handleSubmit, isOpen, onCloseModal])

  return isOpen ? (
    <Container>
      <StyledModal>
        <TitleGroup>
          <Title>Duplex em condomínio</Title>

          <img
            src={closeIcon}
            alt="Ícone de X para fechar o modal"
            onClick={onCloseModal}
          />
        </TitleGroup>

        <Description>
          Por gentileza, preencha os campos abaixo, entrarei em contato o mais
          breve possível.
        </Description>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input
            name="name"
            id="name"
            placeholder="Seu nome"
            minLength="2"
            required
          />

          <InputGroup>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Seu melhor e-mail"
                pattern=".*\.com$"
              />
            </div>

            <div>
              <label htmlFor="phone">Telefone:</label>

              <input
                id="phone"
                name="phone"
                placeholder="+xx xx xxxxx-xxxx"
                pattern="^[0-9+ ]+$"
                minLength="9"
                maxLength="17"
                required
              />
            </div>
          </InputGroup>

          <Button type="submit" isLoading={isLoading}>
            Envie seu contato
          </Button>
        </Form>
      </StyledModal>
    </Container>
  ) : null
}
