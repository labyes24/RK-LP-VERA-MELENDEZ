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
        'Life is like riding a bicycle. To keep your balance, you must keep moving.',
      author: 'Albert Einstein',
    },
    {
      id: 'q3',
      quote:
        'Life is like riding a bicycle. To keep your balance, you must keep moving.',
      author: 'Albert Einstein',
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
      <h2>Quotes</h2>

      <div className="row-group">
        {quotes.map(quote => (
          <Card key={quote.id} {...quote} />
        ))}
      </div>

      <h2>Tips</h2>

      <div className="row-group">
        {tips.map(tip => (
          <Card key={tip.id} {...tip} />
        ))}
      </div>
    </CardTestContainer>
  )
}
