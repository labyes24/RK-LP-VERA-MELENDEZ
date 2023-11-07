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
import { Carousel } from '../../../../components/Carousel'

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
  title: 'Undefined undefined',
  subtitle: 'Undefined undefined',
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

export function PropertyCard({ propertyInfo = PropertyInfo, ...rest }) {
  const iconMap = {}
  IconsArray.forEach(item => {
    iconMap[item.type] = item.icon
  })
  return (
    <Container {...rest}>
      <ImageSection>
        <Carousel></Carousel>
      </ImageSection>
      <DescriptionSection>
        <Header>
          <h2>{propertyInfo.title}</h2>
          <h3>{propertyInfo.subtitle}</h3>
        </Header>
        <Tags>
          {propertyInfo.stats.map(stat => (
            <Tag key={stat.type} src={iconMap[stat.type]} title={stat.value} />
          ))}
        </Tags>
        <Description>{propertyInfo.description}</Description>
        <Price>{`R$ ${propertyInfo.price}`}</Price>
        <Button size="large">Tenho interesse</Button>
      </DescriptionSection>
    </Container>
  )
}
