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

export function Modal({ isOpen, toggleFn }) {
  return isOpen ? (
    <Container>
      <StyledModal>
        <TitleGroup>
          <Title>Duplex em condomínio</Title>

          <img
            src={closeIcon}
            alt="Ícone de X para fechar o modal"
            onClick={toggleFn}
          />
        </TitleGroup>

        <Description>
          Por gentileza, preencha os campos abaixo, entrarei em contato o mais
          breve possível.
        </Description>

        <Form>
          <label htmlFor="name">Nome:</label>
          <input id="name" placeholder="Seu nome" minLength="2" required />

          <InputGroup>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" placeholder="Seu melhor e-mail" />
            </div>

            <div>
              <label htmlFor="phone">Telefone:</label>

              <input
                id="phone"
                placeholder="(xx)xxxxx-xxxx"
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
