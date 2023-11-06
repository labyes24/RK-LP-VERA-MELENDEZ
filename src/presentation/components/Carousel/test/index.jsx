import { Container } from './styles'
import { Carousel } from '..'
import { SplideSlide } from '@splidejs/react-splide'
import { Card } from '../../Card'
import { PropertyCard } from '../../../pages/Properties/components/PropertyCard'

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
const PropertyInfo = {
  title: 'test',
  subtitle: 'teste maneiro',
  stats: [
    {
      type: 'square',
      value: '9999',
    },
    {
      type: 'shower',
      value: '9999',
    },
    {
      type: 'room',
      value: '9999',
    },
    {
      type: 'garage',
      value: '9999',
    },
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam ac justo lacinia tempus. Fusce vehicula justo vel urna ultrices, sit amet bibendum libero gravida. Praesent vel volutpat nisi. Sed tincidunt eget elit eu vestibulum. Proin tincidunt, ligula sed bibendum viverra, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam ac justo lacinia tempus. Fusce vehicula justo vel urna ultrices, sit amet bibendum libero gravida. Praesent vel volutpat nisi. Sed tincidunt eget elit eu vestibulum. Proin tincidunt, ligula sed bibendum viverra',
  price: 99999999,
}

const Properties = [
  {
    title: 'test1',
    subtitle: 'teste1 maneiro',
    stats: [
      {
        type: 'square',
        value: '9999',
      },
      {
        type: 'shower',
        value: '9999',
      },
      {
        type: 'room',
        value: '9999',
      },
      {
        type: 'garage',
        value: '9999',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam ac justo lacinia tempus. Fusce vehicula justo vel urna ultrices, sit amet bibendum libero gravida. Praesent vel volutpat nisi. Sed tincidunt eget elit eu vestibulum. Proin tincidunt, ligula sed bibendum viverra, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam ac justo lacinia tempus. Fusce vehicula justo vel urna ultrices, sit amet bibendum libero gravida. Praesent vel volutpat nisi. Sed tincidunt eget elit eu vestibulum. Proin tincidunt, ligula sed bibendum viverra',
    price: 99999999,
  },
  {
    title: 'test2',
    subtitle: 'teste2 maneiro',
    stats: [
      {
        type: 'square',
        value: '9999',
      },
      {
        type: 'shower',
        value: '9999',
      },
      {
        type: 'room',
        value: '9999',
      },
      {
        type: 'garage',
        value: '9999',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam ac justo lacinia tempus. Fusce vehicula justo vel urna ultrices, sit amet bibendum libero gravida. Praesent vel volutpat nisi. Sed tincidunt eget elit eu vestibulum. Proin tincidunt, ligula sed bibendum viverra, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam ac justo lacinia tempus. Fusce vehicula justo vel urna ultrices, sit amet bibendum libero gravida. Praesent vel volutpat nisi. Sed tincidunt eget elit eu vestibulum. Proin tincidunt, ligula sed bibendum viverra',
    price: 99999999,
  },
  {
    title: 'test3',
    subtitle: 'teste3 maneiro',
    stats: [
      {
        type: 'square',
        value: '9999',
      },
      {
        type: 'shower',
        value: '9999',
      },
      {
        type: 'room',
        value: '9999',
      },
      {
        type: 'garage',
        value: '9999',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam ac justo lacinia tempus. Fusce vehicula justo vel urna ultrices, sit amet bibendum libero gravida. Praesent vel volutpat nisi. Sed tincidunt eget elit eu vestibulum. Proin tincidunt, ligula sed bibendum viverra, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam ac justo lacinia tempus. Fusce vehicula justo vel urna ultrices, sit amet bibendum libero gravida. Praesent vel volutpat nisi. Sed tincidunt eget elit eu vestibulum. Proin tincidunt, ligula sed bibendum viverra',
    price: 99999999,
  },
]
export function CarouselTest() {
  return (
    <Container>
      <Carousel option="card">
        {quotes.map(quote => (
          <SplideSlide key={quote.id}>
            <Card {...quote} />
          </SplideSlide>
        ))}
      </Carousel>
      <Carousel option="cardProperty">
        {quotes.map(quote => (
          <SplideSlide key={quote.id}>
            <PropertyCard {...quote} />
          </SplideSlide>
        ))}
      </Carousel>
    </Container>
  )
}
