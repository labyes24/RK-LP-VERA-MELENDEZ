import {
  Container,
  CopyGroup,
  ImageContainer,
  LinksCard,
  TitleGroup,
} from './styles'

import realEstateBrokerImage from '../../../../assets/realEstateBroker-image.svg'
import emailIcon from '../../../../assets/email-icon.svg'
import whatsappIcon from '../../../../assets/whatsapp-icon.svg'
import mapPinIcon from '../../../../assets/map-pin-icon.svg'

export function RealEstateBrokerDescription() {
  return (
    <Container>
      <ImageContainer>
        <img
          src={realEstateBrokerImage}
          alt="Imagem do corretor de imóveis Winnetou Soares Martins"
        />
      </ImageContainer>

      <article>
        <TitleGroup>
          <h4>Winnetou Soares Martins</h4>
          <span>CRECI 15089</span>
        </TitleGroup>

        <CopyGroup>
          <strong>
            Investir em imóveis é investir em conhecimento, no seu tempo e na
            sua família.
          </strong>

          <p>
            Apresento-me como seu corretor de imóveis, especializado em oferecer
            mais do que propriedades, vendo informações estratégicas e
            oportunidades de investimento sólido no dinâmico mercado
            imobiliário.
          </p>

          <p>
            Estou aqui para ser seu guia confiável nessa jornada, proporcionando
            acesso aos insights valiosos sobre tendências do mercado,
            recomendações personalizadas para investimentos sólidos e orientação
            em cada etapa, desde pesquisa até a negociação de sucesso para as
            partes envolvidas.
          </p>
        </CopyGroup>
      </article>

      <LinksCard>
        <a
          href="https://www.google.com/maps/place/RK/@-27.4241037,-48.4066508,15z/data=!4m10!1m2!2m1!1sRK!3m6!1s0x9527420b068878f5:0x4b86a614a636e7a9!8m2!3d-27.4233434!4d-48.4018518!15sCgJSS1oEIgJya5IBEnJlYWxfZXN0YXRlX2FnZW5jeeABAA!16s%2Fg%2F1tdbxyhw?hl=pt-BR&entry=ttu"
          rel="noreferrer"
          target="_blank"
        >
          <img src={mapPinIcon} alt="Ícone de Mapa" />
          <span>Florianópolis</span>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=48988262951"
          rel="noreferrer"
          target="_blank"
        >
          <img src={whatsappIcon} alt="Ícone do WhatsApp" />
          <span>(48) 98826-2951</span>
        </a>

        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=winnetou@rkimoveis.com.br"
          rel="noreferrer"
          target="_blank"
        >
          <img src={emailIcon} alt="Ícone do Gmail" />
          <span>winnetou@rkimoveis.com.br</span>
        </a>
      </LinksCard>
    </Container>
  )
}
