import { BrokerImage } from '../../../../components/BrokerImage'

import {
  Container,
  CopyGroup,
  ImageContainer,
  LinksCard,
  TitleGroup,
} from './styles'

import emailIcon from '../../../../assets/email-icon.svg'
import whatsappIcon from '../../../../assets/whatsapp-icon.svg'
import mapPinIcon from '../../../../assets/map-pin-icon.svg'

/**
 * Renders the description of a real estate broker.
 * @param {Object<string, import('../../../../../data/BrokerData').BrokerProfile>} brokerData - the information of the broker
 * @return {JSX.Element} the rendered broker description
 */
export function RealEstateBrokerDescription({ brokerData }) {
  const { title, paragraph } = brokerData.description
  const phoneDigits = brokerData.phone.replace(/\D/g, '')

  return (
    <Container>
      <ImageContainer>
        <BrokerImage removeelipses={false} />
      </ImageContainer>

      <article>
        <TitleGroup>
          <h4>{brokerData.name}</h4>
          <span>CRECI {brokerData.CRECI}</span>
        </TitleGroup>

        <CopyGroup>
          <strong>{title}</strong>

          <div className="paragraphs">
            {paragraph.map(paragraph => (
              <p key={crypto.randomUUID()}>{paragraph}</p>
            ))}
          </div>
        </CopyGroup>
      </article>

      <LinksCard>
        <a
          href={`https://www.google.com/maps/place/${brokerData.address.city}`}
          rel="noreferrer"
          target="_blank"
        >
          <img src={mapPinIcon} alt="Ícone de Mapa" />
          <span>{brokerData.address.city}</span>
        </a>

        <a
          href={`https://api.whatsapp.com/send?phone=${phoneDigits}`}
          rel="noreferrer"
          target="_blank"
        >
          <img src={whatsappIcon} alt="Ícone do WhatsApp" />
          <span>{brokerData.phone}</span>
        </a>

        <a href={'mailto:' + brokerData.email} rel="noreferrer" target="_blank">
          <img src={emailIcon} alt="Ícone do Gmail" />
          <span>{brokerData.email}</span>
        </a>
      </LinksCard>
    </Container>
  )
}
