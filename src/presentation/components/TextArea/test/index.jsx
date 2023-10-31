import { TextArea } from '../'
export function TextAreaTest() {
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
      <label htmlFor="your_text">[TextArea]</label>
      <TextArea
        id="your_text"
        placeholder="digite seu texto aqui"
        required
        minLength={5}
        rows={10}
      />

      <br />
      <button style={{ height: '3rem', width: '10rem' }} type="submit">
        Enviar
      </button>
    </form>
  )
}
