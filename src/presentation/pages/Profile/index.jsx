import { Card } from '../../components/Card'
import { RealEstateBrokerDescription } from './components/RealEstateBrokerDescription'
import { Container } from './styles'

const quotesList = [
  {
    quote:
      '“Winnetou apresentou-se bastante solícito e acolhedor. Acompanhou cada etapa do processo com bastante cuidado. Profissional excelente, capacitado e atencioso com cada detalhe.”',
    author: 'Paola Oliveira, Atriz',
    id: crypto.randomUUID(),
  },
  {
    quote:
      '“Winnetou apresentou-se bastante solícito e acolhedor. Acompanhou cada etapa do processo com bastante cuidado. Profissional excelente, capacitado e atencioso com cada detalhe.”',
    author: 'Paola Oliveira, Atriz',
    id: crypto.randomUUID(),
  },
  {
    quote:
      '“Fazer negócios com a RK Imóveis é garantia de sucesso. Eu já comprei, vendi, fui locador e locatário de imóveis, e em todas as negociações fui bem atendido.”',
    author: 'Manoel de Barros, Poeta',
    id: crypto.randomUUID(),
  },
  {
    quote:
      '"Excelente atendimento, quando anunciei meu imóvel, foram muito atenciosos, e venderam ele muito rápido. Empresa séria e transparente. Recomendo!"',
    author: 'Madam CJ Walker, Empresária',
    id: crypto.randomUUID(),
  },
]

export function Profile() {
  return (
    <Container>
      <RealEstateBrokerDescription />

      <section>
        {quotesList.map(quote => (
          <Card key={quote.id} {...quote} />
        ))}
      </section>
    </Container>
  )
}
