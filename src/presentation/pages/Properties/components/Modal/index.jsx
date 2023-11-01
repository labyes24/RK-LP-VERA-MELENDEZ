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

export function Modal({ isOpen, closeFn }) {
  window.addEventListener('keyup', event => {
    if (event.key === 'Escape' && isOpen) closeFn()

    if (event.key === 'Enter' && isOpen) handleSubmit()
  })

  function handleSubmit(event) {
    if (event && event.target) {
      event.preventDefault()

      const formData = new FormData(event.target)
      const data = Object.fromEntries(formData)

      // Enviar informações para o corretor
      console.log(data)

      alert('Formulário enviado!')

      location.reload()
    }
  }

  return isOpen ? (
    <Container>
      <StyledModal>
        <TitleGroup>
          <Title>Duplex em condomínio</Title>

          <img
            src={closeIcon}
            alt="Ícone de X para fechar o modal"
            onClick={closeFn}
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

          <button type="submit">Envie seu contato</button>
        </Form>
      </StyledModal>
    </Container>
  ) : null
}
