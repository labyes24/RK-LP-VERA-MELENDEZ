import { ContainerSplide } from './styles'

const defaultOption = {
  rewind: true,
  type: 'loop',
  arrows: false,
  gap: '1rem',
  autoWidth: true,
}

const cardOption = {
  rewind: true,
  type: 'loop',
  arrows: false,

  perPage: 4,
  gap: '9rem',
  autoWidth: false,
  breakpoints: {
    1024: {
      //abaixo de 1024
      type: 'loop',
      perPage: 2,
      gap: '1rem',
      autoWidth: true,
    },
  },
}
const propertyCardOption = {
  type: 'loop',
  arrows: false,
  gap: '3.2rem',
  focus: 'center',
  autoWidth: true,

  breakpoints: {
    1024: {
      rewind: true,
      type: 'loop',
      arrows: false,
      gap: '1rem',
      focus: 'center',
      autoWidth: true,
    },
  },
}

const pictureOption = {
  arrows: true,
  type: 'loop',
  perPage: 1,
  width: '100%',
  height: '100%',
  drag: false,
}
export function Carousel({ children, option = 'default', ...rest }) {
  let settings = defaultOption

  if (option === 'card') {
    settings = cardOption
  } else if (option === 'cardProperty') {
    settings = propertyCardOption
  } else if (option === 'picture') {
    settings = pictureOption
  } else {
    settings = defaultOption
  }

  return (
    <ContainerSplide options={settings} aria-labelledby="carousel" {...rest}>
      {children}
    </ContainerSplide>
  )
}
