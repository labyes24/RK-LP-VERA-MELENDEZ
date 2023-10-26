import { Card } from '../../components/Card'
import { Container } from './styles'

const quotesList = [
  {
    quote:
      '“Winnetou apresentou-se bastante solícito e acolhedor. Acompanhou cada etapa do processo com bastante cuidado. Profissional excelente, capacitado e atencioso com cada detalhe.”',
    author: 'Paola Oliveira, Atriz',
  },
  {
    quote:
      '“Winnetou apresentou-se bastante solícito e acolhedor. Acompanhou cada etapa do processo com bastante cuidado. Profissional excelente, capacitado e atencioso com cada detalhe.”',
    author: 'Paola Oliveira, Atriz',
  },
  {
    quote:
      '“Fazer negócios com a RK Imóveis é garantia de sucesso. Eu já comprei, vendi, fui locador e locatário de imóveis, e em todas as negociações fui bem atendido.”',
    author: 'Manoel de Barros, Poeta',
  },
  {
    quote:
      '"Excelente atendimento, quando anunciei meu imóvel, foram muito atenciosos, e venderam ele muito rápido. Empresa séria e transparente. Recomendo!"',
    author: 'Madam CJ Walker, Empresária',
  },
]

export function Profile() {
  return (
    <Container>
      <section>
        {quotesList.map((quote, index) => (
          <Card key={index} {...quote} />
        ))}
      </section>
    </Container>
  )
}
