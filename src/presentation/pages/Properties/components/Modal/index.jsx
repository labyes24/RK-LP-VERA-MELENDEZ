export function Modal() {
  return (
    <div className="container">
      <div className="modal">
        <div className="title-group">
          <h3>Duplex em condomínio</h3>

          <i className="ph ph-x">Close</i>
        </div>

        <p>
          Por gentileza, preencha os campos abaixo, entrarei em contato o mais
          breve possível.
        </p>

        <form>
          <label htmlFor="name">Nome:</label>
          <input id="name" placeholder="Seu nome" minLength="2" required />

          <div className="input-group">
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
          </div>

          <button type="submit">Envie seu contato</button>
        </form>
      </div>
    </div>
  )
}
