import { Container } from './styles'

import mapIcon from '../../assets/contactMap.png'
import emailIcon from '../../assets/envelopeEmail.png'
import whatsappIcon from '../../assets/contactWhatsappIcon.svg'

function ContactItem({ icon, content, descriptionImg }) {
  return (
    <li>
      <img src={icon} alt={descriptionImg} />
      {content}
    </li>
  )
}

/**
 * Component for displaying contact information, such as address, email, and phone number.
 *
 * @param {Object} props - The component's properties.
 * @param {Array} props.objectProps - An array containing contact information.
 * @returns {JSX.Element|null} A JSX element displaying the contact information or null if no information is available.
 */

export function ContactBlock({ objectProps }) {
  const contactInfo = objectProps[0]

  if (!contactInfo) {
    return null
  }

  return (
    <Container>
      <ul>
        <ContactItem
          icon={mapIcon}
          content={`
          ${contactInfo.address.street}, 
            ${contactInfo.address.number} - 
            ${contactInfo.address.district} 
            ${contactInfo.address.city}
          `}
          descriptionImg={'Icone de um mapa desenhado'}
        />

        <ContactItem
          icon={emailIcon}
          content={contactInfo.email}
          descriptionImg={'Icone de um envelope de e-mail desenhado'}
        />

        <ContactItem
          icon={whatsappIcon}
          content={contactInfo.phoneNumber}
          descriptionImg={'Icone do aplicativo Whatsapp desenhado'}
        />
      </ul>
    </Container>
  )
}
