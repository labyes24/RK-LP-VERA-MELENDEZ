import { Container, Content } from './styles'
import { Video } from '../../components/Video'
import { Card } from '../../components/Card'
import { WhatsappButton } from '../../components/WhatsappButton'

export function Home() {
  const quotes = [
    {
      id: crypto.randomUUID(),
      quote:
        'Life is like riding a bicycle. To keep your balance, you must keep moving.',
      author: 'Albert Einstein',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Winnetou apresentou-se bastante solícito e acolhedor. Acompanhou cada etapa do processo com bastante cuidado. Profissional excelente, capacitado e atencioso com cada detalhe.',
      author: 'Paola Oliveira,  Atriz',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Fazer negócios com a RK Imóveis é garantia de sucesso. Eu já comprei, vendi, fui locador e locatário de imóveis, e em todas as negociações fui bem atendido.',
      author: 'Manoel de Barros, Poeta',
    },
    {
      id: crypto.randomUUID(),
      quote:
        'Excelente atendimento, quando anunciei meu imóvel, foram muito atenciosos, e venderam ele muito rápido. Empresa séria e transparente. Recomendo!',
      author: 'Madam CJ Walker, empresária',
    },
  ]

  return (
    <Container>
      <div className="bg-img" />
      <Content>
        <h2>Oportunidades únicas não esperam por ninguém!</h2>
        <Video />
        <div className="cards-wrapper">
          {quotes.map(quote => (
            <Card key={quote.id} {...quote} />
          ))}
        </div>
      </Content>
      <WhatsappButton />
    </Container>
  )
}
