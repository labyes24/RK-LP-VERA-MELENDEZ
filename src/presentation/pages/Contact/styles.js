import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    > .titles {
      text-align: center;
      > h1 {
        padding-top: 3.5rem;
        font-size: 2rem;
        font-weight: 300;
        font-family: ${props => props.theme.FONTS.Primary};
        margin: 0 1.5rem;
      }
      > p {
        padding-top: 0.5rem;
        font-weight: bold;
        font-size: 1.6rem;
        color: #5490f9;
      }
    }

    > .form {
      display: flex;
      background-color: #fff;
      width: 39rem;
      height: 120rem;
      border-radius: 0.8rem;

      //excluir v
      color: #000;
      align-items: center;
      justify-content: center;
      //
    }
  }
`
