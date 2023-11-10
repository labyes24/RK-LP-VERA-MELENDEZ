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
import { SplideSlide } from '@splidejs/react-splide'

const IconsMap = {
  garage: garageIcon,
  rooms: roomIcon,
  square: squareIcon,
  bathrooms: showerIcon,
}

const PropertyInfo = {
  id: crypto.randomUUID(),
  brokerId: 1,
  RKCode: 'N/A',
  title: 'N/A',
  region: 'N/A',
  details: {
    square: 'N/A',
    rooms: 'N/A',
    bathrooms: 'N/A',
    garage: 'N/A',
  },
  description: 'N/A',
  price: 'R$ N/A',
  pictures: ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
}
/**
 * Creates a styled PropertyCard component.
 * @param {Property} propertyInfo - Property information.
 * @return {JSX.Element} The styled PropertyCard component.
 */
export function PropertyCard({ propertyInfo = PropertyInfo, ...rest }) {
  const details = Object.keys(PropertyInfo.details)

  return (
    <Container {...rest}>
      <ImageSection>
        <Carousel option="picture">
          {propertyInfo.pictures.map((picture, index) => (
            <SplideSlide key={index}>
              <img src={picture} alt="Imagem do imóvel" />
            </SplideSlide>
          ))}
        </Carousel>
      </ImageSection>
      <DescriptionSection>
        <Header>
          <h2>{propertyInfo.title}</h2>
          <h3>{propertyInfo.region}</h3>
        </Header>
        <Tags>
          {details.map(detail => (
            <Tag
              key={detail}
              src={IconsMap[detail]}
              title={PropertyInfo.details[detail]}
            />
          ))}
        </Tags>
        <Description>{propertyInfo.description}</Description>
        <Price>{`${propertyInfo.price}`}</Price>
        <Button size="large">Tenho interesse</Button>
      </DescriptionSection>
    </Container>
  )
}
