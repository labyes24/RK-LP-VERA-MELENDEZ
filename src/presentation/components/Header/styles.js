import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
export const Container = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;

  &::before {
    /* display: ${({ $opened }) => ($opened ? 'flex' : 'none')}; */
    position: absolute;
    content: '';

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: ${({ $opened }) =>
      $opened ? 'rgba(0, 0, 0, 0.3)' : 'transparent'};
    backdrop-filter: blur(3px);
    opacity: ${({ $opened }) => ($opened ? 0.7 : 0)};

    transition: all 0.5s ease;
  }
  @media (min-width: 1024px) {
    &::before {
      background-color: transparent;
      backdrop-filter: blur(0);
    }
  }
`
export const Logo = styled(NavLink)`
  z-index: 3;
  img {
    width: 6rem;
    @media (min-width: 1024px) {
      width: 8rem;
    }
  }
`
export const ToggleHamburger = styled.div`
  z-index: 3;

  input {
    display: none;
  }

  label {
    position: relative;
    width: 36px;
    height: 36px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 6px;
    transition-duration: 0.5s;
    transform-origin: 2rem center;
  }

  span {
    width: 100%;
    height: 5px;
    background-color: ${({ theme }) => theme.COLORS.white};
    border-radius: 4px;
  }

  span:nth-child(2) {
    transition-duration: 0.6s;
    width: 75%;
  }

  input:checked + label {
    transition-duration: 0.5s;
    transform: rotate(180deg);
  }

  input:checked + label span {
    position: absolute;
    transition-duration: 0.5s;
    background-color: ${({ theme }) => theme.COLORS['blue-sky-700']};
  }

  input:checked + label span:first-child {
    width: 75%;
    transform: rotate(45deg);
    transition-duration: 0.5s;
  }

  input:checked + label span:nth-child(2) {
    transform: scaleX(0);
    transition-duration: 0.1s;
  }

  input:checked + label span:last-child {
    width: 75%;
    transform: rotate(-45deg);
    transition-duration: 0.5s;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`
export const Links = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 13rem 0rem;

  background-color: ${({ theme }) => theme.COLORS['blue-titan']};

  position: absolute;
  width: 25rem;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;

  transform: ${({ $opened }) =>
    $opened ? 'translateX(0)' : 'translateX(100%)'};
  transition: all 0.3s ease;

  @media (min-width: 1024px) {
    position: unset;
    transform: unset;

    width: fit-content;
    gap: 3.2rem;

    flex-direction: row;

    padding: 0 0;
    background-color: transparent;
  }
`
export const LinkWrapper = styled.li`
  list-style: none;
  padding: 1.6rem 3rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${({ theme }) => theme.COLORS['blue-sky-600']};
    opacity: 0;
    z-index: -1;
    transition: all 0.5s;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover::before {
    right: 0;
    opacity: 0.08;
  }

  > a {
    position: relative;
    text-decoration: none;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 100%;
    text-transform: uppercase;

    color: ${({ theme }) => theme.COLORS['blue-sky-600']};
    transition: color 0.3s ease;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS['blue-sky-700']};
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
  }
  &:hover a::before {
    border-bottom: 2px solid ${({ theme }) => theme.COLORS['blue-sky-700']};
  }

  a.active {
    font-weight: bold;
    ${({ theme }) => theme.COLORS['blue-sky-700']}
  }

  &:has(a.active)::before {
    right: 0;
    opacity: 0.08;
  }

  @media (min-width: 1024px) {
    padding: 0 0;

    > a {
      color: ${({ theme }) => theme.COLORS['zinc-100']};

      &:hover {
        color: ${({ theme }) => theme.COLORS.white};
      }

      &:hover::before {
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.white};
      }
    }

    a.active {
      color: ${({ theme }) => theme.COLORS.white};
    }
  }
`
