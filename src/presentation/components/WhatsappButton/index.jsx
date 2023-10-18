import { Container } from './style.js'
import whatsappButton from '../../assets/whatsappButton.svg'

const WHATSAPP_URL = 'https://wa.me'

/**
 * Renders a Whatsapp button at the right bottom of the page.
 *
 * @param {string} phoneNumber - Receive a phone number.
 * @param {string | null} message - I received an optional message that will be forwarded to WhatsApp with the phoneNumber provided.
 * @returns {JSX.Element} The rendered Whatsapp button.
 */

export function WhatsappButton({ phoneNumber, message = null }) {
  phoneNumber = phoneNumber?.replace(/[^\w\s]/gi, '').replace(/ /g, '')

  let url = `${WHATSAPP_URL}/55${phoneNumber}`

  if (message) {
    url += `/?text=${encodeURI(message)}`
  }

  return (
    <Container>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={whatsappButton} alt="Botão com icone do WhatsApp." />
      </a>
    </Container>
  )
}
