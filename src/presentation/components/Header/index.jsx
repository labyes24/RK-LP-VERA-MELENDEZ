import { Container, Logo, ToggleHamburger, Links, Link } from './styles'

import logoRKI from '../../assets/logoRKI.svg'

/**
 * Renders a header component  - with a quote and an optional author.
 *
 * @param {string} quote - .
 * @param {string | undefined} author - .
 * @return {JSX.Element} The rendered header component.
 */
export function Header({ ...rest }) {
  return (
    <Container>
      <Logo src={logoRKI} alt="Logo da RK Imóveis" />
      {/* <Hamburger /> */}
      <Links>
        <Link>
          <a href="">perfil</a>
        </Link>
        <Link>
          <a href="">imóveis</a>
        </Link>
        <Link>
          <a href="">contato</a>
        </Link>
      </Links>
    </Container>
  )
}
