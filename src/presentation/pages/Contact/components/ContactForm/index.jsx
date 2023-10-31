import { TextInput } from '../../../../components/TextInput'
import { TextArea } from '../../../../components/TextArea'
import { SelectOption } from '../../../../components/SelectOption'

import { FormContainer, ShortButton } from './styles'

export function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="fieldsContainer">
        <fieldset>
          <legend>
            <span> Dados pessoais</span>
          </legend>

          <div className="inputWrapper">
            <label htmlFor="name">
              Nome <span>(Campo obrigatório):</span>
            </label>
            <TextInput
              placeholder="Digite seu nome"
              name="name"
              id="name"
              required
              minLength={2}
            />
          </div>

          <div className="inRow">
            <div className="inputWrapper">
              <label htmlFor="email">Email</label>
              <TextInput
                placeholder="Digite seu e-mail"
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="inputWrapper">
              <label htmlFor="whatsapp">
                Whatsapp <span>(Campo obrigatório):</span>
              </label>
              <TextInput
                type="tel"
                placeholder="(00) 00000-0000"
                name="whatsapp"
                id="whatsapp"
                required
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>Imóvel</span>
          </legend>

          <div className="inRow">
            <div className="inputWrapper">
              <label htmlFor="local">Localização </label>
              <TextInput
                placeholder="Cidade, bairro..."
                name="local"
                id="local"
              />
            </div>

            <div className="inputWrapper">
              <label htmlFor="purpose">Finalidade</label>
              <SelectOption
                name="purpose"
                id="purpose"
                defaultValue=""
                required
              >
                <option value="" disabled hidden>
                  Selecione
                </option>
                <option value="rent">Alugar</option>
                <option value="sell">Vender</option>
                <option value="invest">Investir</option>
              </SelectOption>
            </div>
          </div>

          <div className="inRow">
            <div className="inputWrapper">
              <label htmlFor="category">Categoria</label>
              <SelectOption name="category" id="category" defaultValue="">
                <option value="" hidden>
                  Selecione
                </option>
                <option value="apartment">Apartamento</option>
                <option value="house">Casa</option>
                <option value="terrain">Terreno</option>
                <option value="shed">Galpão</option>
                <option value="others">outros</option>
              </SelectOption>
            </div>

            <div className="inputWrapper">
              <label htmlFor="bedroom">Quartos</label>
              <SelectOption name="bedroom" id="bedroom" defaultValue="">
                <option value="" hidden>
                  Selecione
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5mais">5 ou mais</option>
              </SelectOption>
            </div>
          </div>

          <div className="inRow">
            <div className="inputWrapper">
              <label htmlFor="min_value">Valor mínimo</label>
              <TextInput
                placeholder="Mín (R$)"
                type="number"
                name="min_value"
                id="min_value"
              />
            </div>

            <div className="inputWrapper">
              <label htmlFor="max_value">Valor máximo</label>
              <TextInput
                placeholder="Máx (R$)"
                type="number"
                name="max_value"
                id="max_value"
              />
            </div>
          </div>

          <div className="inputWrapper">
            <label htmlFor="extra_info">Informações extras</label>
            <TextArea
              placeholder="Preferências de imóveis na planta e/ou interesse do imóvel..."
              name="extra_info"
              id="extra_info"
              rows="6"
            />
          </div>
        </fieldset>
      </div>

      <footer>
        <p>
          Ao informar meus dados eu concordo com a{' '}
          <a href="">Política de privacidade</a>.
        </p>

        <ShortButton size="small" type="submit">
          Enviar
        </ShortButton>
      </footer>
    </FormContainer>
  )
}
