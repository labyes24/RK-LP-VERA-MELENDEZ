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

export const ToggleHamburger = styled.div`
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
    width: 100%;
    transform: rotate(45deg);
    transition-duration: 0.5s;
  }

  input:checked + label span:nth-child(2) {
    transform: scaleX(0);
    transition-duration: 0.1s;
  }

  input:checked + label span:last-child {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: 0.5s;
  }
`

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
