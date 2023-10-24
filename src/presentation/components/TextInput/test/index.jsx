import { TextInput } from '../'
export function InputTextTest() {
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
        maxWidth: '65rem',
        borderRadius: '0.8rem',
      }}
    >
      <label htmlFor="name">[texto]</label>
      <TextInput
        id="name"
        placeholder="digite seu texto..."
        required
        minLength={5}
      />

      <label htmlFor="email">[email]</label>
      <TextInput
        id="email"
        placeholder="nome@dominio.xyz"
        type="email"
        required
      />

      <label htmlFor="desativado">[desabilitado]</label>
      <TextInput id="desativado" placeholder="desabilitado" disabled />

      <br />
      <button style={{ height: '3rem', width: '10rem' }} type="submit">
        Enviar
      </button>
    </form>
  )
}
