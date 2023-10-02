import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  inset: 0;
  height: 100vh;
  width: 100vw;
  padding-inline: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #0009;

  transition: 0.3s background-color;
`

export const StyledModal = styled.div`
  @keyframes appear {
    from {
      transform: translateY(-10vh);
      opacity: 0;
    }
  }

  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.white}; /* form/background */
  border-radius: 8px;
  box-shadow: #64646f33 0 7px 29px 0;

  animation: appear 0.2s;

  @media screen and (min-width: 524px) {
    padding: 2.4rem 3.2rem;
  }
`

export const TitleGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
`

export const Title = styled.h3`
  margin-bottom: 0.8rem;

  font-size: 2.2rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.FONTS.Primary}, sans-serif;
  color: ${({ theme }) => theme.COLORS['blue-sky-700']}; /* form/input-border */

  @media screen and (min-width: 524px) {
    font-size: 3.6rem;
  }
`

export const Description = styled.p`
  margin-bottom: 1.6rem;

  line-height: 140%;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.FONTS.Secondary}, sans-serif;
  color: ${({ theme }) => theme.COLORS['blue-sky-700']}; /* form/input-border */

  @media screen and (min-width: 524px) {
    font-size: 1.6rem;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    width: fit-content;
    margin-bottom: 0.4rem;

    color: ${({ theme }) =>
      theme.COLORS['blue-sky-700']}; /* form/input-border */
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.Primary}, sans-serif;
  }

  input {
    padding: 1rem;

    background-color: ${({ theme }) =>
      theme.COLORS['zinc-50']}; /* form/input-background */
    border: 1px solid ${({ theme }) => theme.COLORS['blue-sky-700']}; /* form/input-border */
    border-radius: 5px;
    outline: none;

    &[id='name']:invalid:focus,
    &[id='email']:invalid:focus,
    &[id='phone']:invalid:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.COLORS.tomate}; /* form/input-border-error */
    }

    &::placeholder {
      color: ${({ theme }) =>
        theme.COLORS['zinc-200']}; /* form/secondary-text-color */
      font-size: 1.6rem;
      font-family: ${({ theme }) => theme.FONTS.Secondary}, sans-serif;
    }
  }

  button[type='submit'] {
    padding: 1.6rem 3.2rem;

    background-color: ${({ theme }) =>
      theme.COLORS['blue-sky-600']}; /*form/button-background-color */
    border: none;
    border-radius: 8px;

    color: ${({ theme }) => theme.COLORS.white}; /* form/background */
    font-size: 1.6rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.FONTS.Primary}, sans-serif;

    &:hover {
      cursor: pointer;
      filter: brightness(1.3);
    }

    @media screen and (min-width: 524px) {
      font-size: 2rem;
    }
  }
`

export const InputGroup = styled.div`
  margin: 1.6rem 0 3.2rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  @media screen and (min-width: 524px) {
    flex-direction: row;
  }
`
