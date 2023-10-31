import { SelectOption } from '../'
export function SelectOptionTest() {
  return (
    <form
      style={{
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        backgroundColor: '#fff',
        padding: '2rem',
        color: '#000',
        width: '100%',
        height: '300px',
        maxWidth: '65rem',
        borderRadius: '0.8rem',
      }}
    >
      <label htmlFor="teste">[SelectOption]</label>
      <SelectOption id="teste" name="teste" defaultValue="" required>
        <option value="" disabled hidden>
          selecione uma opção
        </option>
        <option value="1">opção 1</option>
        <option value="2">opção 2</option>
        <option value="3">opção 3</option>
        <option value="4">opção 4</option>
      </SelectOption>

      <br />
      <button style={{ height: '3rem', width: '10rem' }} type="submit">
        Enviar
      </button>
    </form>
  )
}
