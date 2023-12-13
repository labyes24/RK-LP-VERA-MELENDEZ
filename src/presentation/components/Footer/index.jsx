import { Container } from './styles'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <Container>
      <p>
        &copy; {year}{' '}
        <b>
          <a
            href="https://lab-links.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Team Lab Yes!
          </a>
        </b>{' '}
        <span>Todos os direitos reservados.</span>
      </p>
    </Container>
  )
}
