import { CardTestContainer } from './styles'
import { Card } from '../../Card'
export function CardTest() {
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
  ]

  const tips = [
    {
      id: 't1',
      quote:
        'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    },
    {
      id: 't2',
      quote:
        'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    },
  ]

  return (
    <CardTestContainer>
      <h2>Quotes scroll</h2>

      <div className="row-group-scroll">
        {quotes.map(quote => (
          <Card key={quote.id} {...quote} />
        ))}
      </div>

      <h2>Quotes wrap</h2>

      <div className="row-group-wrap">
        {quotes.map(quote => (
          <Card key={quote.id} {...quote} />
        ))}
      </div>

      <h2>Tips</h2>

      <div className="row-group-scroll">
        {tips.map(tip => (
          <Card key={tip.id} {...tip} />
        ))}
      </div>
    </CardTestContainer>
  )
}
