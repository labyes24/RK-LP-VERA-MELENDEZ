import { Container, Content } from './styles'
import { Video } from '../../components/Video'
import { Card } from '../../components/Card'
import { WhatsappButton } from '../../components/WhatsappButton'
//import backgroundImg from '../../assets/costa-norte-ingleses-5 3.png'

export function Home() {
  return (
    <Container>
      <Content>
        <h2>Oportunidades únicas não esperam por ninguém!</h2>
        <Video />
        <div className="cards-wrapper">
          <Card
            quote="Life is like riding a bicycle. To keep your balance, you must keep moving."
            author="Madam CJ Walker, empresária"
          />
          <Card
            quote="Fazer negócios com a RK Imóveis é garantia de sucesso. Eu já comprei, vendi, fui locador e locatário de imóveis, e em todas as negociações fui bem atendido."
            author="Manoel de Barros, Poeta"
          />
          <Card
            quote="Winnetou apresentou-se bastante solícito e acolhedor. Acompanhou cada etapa do processo com bastante cuidado. Profissional excelente, capacitado e atencioso com cada detalhe."
            author="Paola Oliveira,  Atriz"
          />
          <Card
            quote="Life is like riding a bicycle. To keep your balance, you must keep moving."
            author="Albert Einstein"
          />
        </div>
      </Content>
      <WhatsappButton />
    </Container>
  )
}
