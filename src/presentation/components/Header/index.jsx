import { Container, Logo, ToggleHamburger, Links, Link } from './styles'
import { useState } from 'react'

import logoRKI from '../../assets/logoRKI.svg'

function Hamburger({ ...rest }) {
  return (
    <ToggleHamburger>
      <input id="checkbox" type="checkbox" {...rest} />
      <label htmlFor="checkbox">
        <span />
        <span />
        <span />
      </label>
    </ToggleHamburger>
  )
}

/**
 * Renders a header component  - with a quote and an optional author.
 *
 * @param {string} quote - .
 * @param {string | undefined} author - .
 * @return {JSX.Element} The rendered header component.
 */
export function Header() {
  const [openMenuHambuger, setOpenMenuHambuger] = useState(false)
  function handleOpenMenuHambuger() {
    return setOpenMenuHambuger(!openMenuHambuger)
  }
  return (
    <Container>
      <Logo src={logoRKI} alt="Logo da RK Imóveis" />
      <Hamburger checked={openMenuHambuger} onChange={handleOpenMenuHambuger} />
      <Links $openMenu={openMenuHambuger}>
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
