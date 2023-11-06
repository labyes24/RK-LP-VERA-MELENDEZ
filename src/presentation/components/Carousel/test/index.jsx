import { Container } from './styles'
import { Carousel } from '..'
import { SplideSlide } from '@splidejs/react-splide'
import { Card } from '../../Card'
export function CarouselTest() {
  const quotes = [
    {
      id: 'q1',
      quote:
        'Life is like riding a bicycle. To keep your balance, you must keep moving.',
      author: 'Albert Einstein',
    },
    {
      id: 'q2',
      quote:
        'Winnetou apresentou-se bastante solícito e acolhedor. Acompanhou cada etapa do processo com bastante cuidado. Profissional excelente, capacitado e atencioso com cada detalhe.',
      author: 'Paola Oliveira,  Atriz',
    },
    {
      id: 'q3',
      quote:
        'Fazer negócios com a RK Imóveis é garantia de sucesso. Eu já comprei, vendi, fui locador e locatário de imóveis, e em todas as negociações fui bem atendido.',
      author: 'Manoel de Barros, Poeta',
    },
    {
      id: 'q4',
      quote:
        'Excelente atendimento, quando anunciei meu imóvel, foram muito atenciosos, e venderam ele muito rápido. Empresa séria e transparente. Recomendo!',
      author: 'Madam CJ Walker, empresária',
    },
    {
      id: 'q5',
      quote:
        'RK Imóveis é garantia de sucesso. Eu já comprei, vendi, fui locador e locatário de imóveis, e em todas as negociações fui bem atendido.',
      author: 'Barros, Poeta',
    },
    {
      id: 'q6',
      quote:
        'Quando anunciei meu imóvel, foram muito atenciosos, e venderam ele muito rápido. Empresa séria e transparente. Recomendo!',
      author: 'CJ Walker, empresária',
    },
  ]
  return (
    <Container>
      <Carousel>
        {quotes.map(quote => (
          <SplideSlide key={quote.id}>
            <Card {...quote} />
          </SplideSlide>
        ))}
      </Carousel>
    </Container>
  )
}
