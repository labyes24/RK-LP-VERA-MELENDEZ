import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  padding-inline: 1.6rem;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #0009;

  transition: 0.3s background-color;
`

export const Modal = styled.div`
  max-width: 825px;
  padding: 2.4rem;

  background-color: #fdfdfd; /* form/background */
  border-radius: 8px;
  box-shadow: #64646f33 0 7px 29px 0;

  animation: appear 0.2s;
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
  font-family: Roboto, sans-serif;
  color: #091030; /* form/input-border */
`

export const Description = styled.p`
  margin-bottom: 1.6rem;

  line-height: 140%;
  font-size: 1.2rem;
  color: #091030; /* form/input-border */
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    width: fit-content;
    margin-bottom: 0.4rem;

    color: #091030; /* form/input-border */
    font-size: 1.6rem;
    font-family: Roboto, sans-serif;
  }

  input {
    padding: 1rem;

    background-color: #f3f4f6; /* form/input-background */
    border: 1px solid #091030; /* form/input-border */
    border-radius: 5px;
    outline: none;

    &[id='name']:invalid:focus,
    &[id='phone']:invalid:focus {
      outline: none;
      border: 1px solid #ff5353; /* form/input-border-error */
    }

    &::placeholder {
      color: #888ca6; /* form/secondary-text-color */
      font-size: 1.6rem;
    }
  }

  button[type='submit'] {
    padding: 1.6rem 3.2rem;

    background-color: #10184d; /*form/button-background-color */
    border: none;
    border-radius: 8px;

    color: #fdfdfd; /* form/background */
    font-size: 1.6rem;
    font-weight: 700;
    font-family: Roboto, sans-serif;

    &:hover {
      cursor: pointer;
      background-color: #10184df5;
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
`
