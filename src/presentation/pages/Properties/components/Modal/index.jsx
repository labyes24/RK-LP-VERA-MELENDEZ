import * as S from './styles'

export function Modal({ isOpen, toggleFn }) {
  return isOpen ? (
    <S.Container>
      <S.Modal>
        <S.TitleGroup>
          <S.Title>Duplex em condomínio</S.Title>

          <button onClick={toggleFn}>
            <i className="ph ph-x">Close</i>
          </button>
        </S.TitleGroup>

        <S.Description>
          Por gentileza, preencha os campos abaixo, entrarei em contato o mais
          breve possível.
        </S.Description>

        <S.Form>
          <label htmlFor="name">Nome:</label>
          <input id="name" placeholder="Seu nome" minLength="2" required />

          <S.InputGroup>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" placeholder="Seu melhor e-mail" />
            </div>

            <div>
              <label htmlFor="phone">Telefone:</label>
              <input
                id="phone"
                placeholder="(xx)xxxxx-xxxx"
                pattern="^[0-9]+$"
                maxLength="15"
                required
              />
            </div>
          </S.InputGroup>

          <button type="submit">Envie seu contato</button>
        </S.Form>
      </S.Modal>
    </S.Container>
  ) : null
}
