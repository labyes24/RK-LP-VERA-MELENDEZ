import { ContainerSplide } from './styles'

const defaultOption = {
  rewind: true,
  arrows: false,
  gap: '1rem',
  autoWidth: true,
}

const cardOption = {
  rewind: true,
  arrows: false,

  perPage: 4,
  gap: '7rem',
  autoWidth: false,
  breakpoints: {
    1024: {
      //abaixo de 1024
      perPage: 2,
      gap: '1rem',
      autoWidth: true,
    },
  },
}
const propertyCardOption = {
  arrows: false,
  gap: '3.2rem',
  focus: 'center',
  autoWidth: true,

  breakpoints: {
    1024: {
      rewind: true,
      arrows: false,
      gap: '1rem',
      focus: 'center',
      autoWidth: true,
    },
  },
}
export function Carousel({ children, option = 'default', ...rest }) {
  let settings = defaultOption

  if (option === 'card') {
    settings = cardOption
  } else if (option === 'cardProperty') {
    settings = propertyCardOption
  } else {
    settings = defaultOption
  }

  return (
    <ContainerSplide options={settings} aria-labelledby="carousel" {...rest}>
      {children}
    </ContainerSplide>
  )
}
