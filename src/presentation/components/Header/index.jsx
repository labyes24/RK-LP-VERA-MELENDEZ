import { Container, Logo, ToggleHamburger, Links, LinkWrapper } from './styles'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logoRKI from '../../assets/logoRKI.svg'

/**
 * Render burger component.
 * @param {boolean} $opened - Check the status of the burger.
 * @param {void} onChange - Handles burger state.
 * @return {JSX.Element} The rendered animated burger component.
 */

function Hamburger({ $opened, ...rest }) {
  return (
    <ToggleHamburger $opened={$opened}>
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
 * Render a header component.
 *
 * @return {JSX.Element} The rendered header component.
 */
export function Header() {
  const [openMenuHambuger, setOpenMenuHambuger] = useState(false)
  function handleOpenMenuHambuger() {
    return setOpenMenuHambuger(!openMenuHambuger)
  }
  return (
    <Container $opened={openMenuHambuger}>
      <Logo to="/home">
        <img src={logoRKI} alt="Logo da RK Imóveis" />
      </Logo>
      <Hamburger $opened={openMenuHambuger} onChange={handleOpenMenuHambuger} />

      <Links $opened={openMenuHambuger}>
        <LinkWrapper>
          <NavLink to="/profile">perfil</NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="/properties">imóveis</NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="/contact">contato</NavLink>
        </LinkWrapper>
      </Links>
    </Container>
  )
}
