import styled from 'styled-components'

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3rem 0;
`

export const Logo = styled.img`
  width: 8rem;
`

export const ToggleHamburger = styled.button``

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
`

export const Link = styled.li`
  list-style: none;
  > a {
    position: relative;
    text-decoration: none;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    text-transform: uppercase;

    line-height: normal;
    color: ${({ theme }) => theme.COLORS['zinc-100']};
    transition: color 0.3s ease;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS.white};
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      border-bottom: 2px solid transparent;
      transition: border-bottom 0.3s ease;
    }

    &:hover::before {
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.white};
    }
  }
`
