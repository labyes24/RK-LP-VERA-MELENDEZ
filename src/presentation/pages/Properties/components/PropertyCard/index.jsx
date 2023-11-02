import {
  Container,
  ImageSection,
  DescriptionSection,
  Header,
  Tags,
  Description,
  Price,
} from './styles'
import { Button } from '../../../../components/Button'
import { Tag } from '../../../../components/Tag'

import garageIcon from '../../../../assets/garage-icon.svg'
import roomIcon from '../../../../assets/room-icon.svg'
import squareIcon from '../../../../assets/square-icon.svg'
import showerIcon from '../../../../assets/shower-icon.svg'

const IconsArray = [
  {
    type: 'garage',
    icon: garageIcon,
  },
  {
    type: 'room',
    icon: roomIcon,
  },
  {
    type: 'square',
    icon: squareIcon,
  },
  {
    type: 'shower',
    icon: showerIcon,
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

export function PropertyCard({ ...rest }) {
  const iconMap = {}
  IconsArray.forEach(item => {
    iconMap[item.type] = item.icon
  })
  return (
    <Container {...rest}>
      <ImageSection></ImageSection>
      <DescriptionSection>
        <Header>
          <h2>{PropertyInfo.title}</h2>
          <h3>{PropertyInfo.subtitle}</h3>
        </Header>
        <Tags>
          {PropertyInfo.stats.map(stat => (
            <Tag key={stat.type} src={iconMap[stat.type]} title={stat.value} />
          ))}
        </Tags>
        <Description>{PropertyInfo.description}</Description>
        <Price>{`R$ ${PropertyInfo.price}`}</Price>
        <Button size="large">Tenho interesse</Button>
      </DescriptionSection>
    </Container>
  )
}
