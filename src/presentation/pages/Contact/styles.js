import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 3.5rem 2rem;

  > .titles {
    text-align: center;
    > h1 {
      font-size: 2rem;
      font-weight: 300;
      font-family: ${props => props.theme.FONTS.Primary};
    }
    > p {
      padding-top: 0.5rem;
      font-weight: bold;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS['blue-sky']};
    }
  }

  .image {
    display: none;
  }

  > .form {
    width: 100%;
    border-radius: 0.8rem;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
    padding: 0 5rem 1rem;

    grid-template-areas:
      'null  titles titles'
      'contact form form';

    .image {
      display: block;
      transform: translate(0, 42px);
      z-index: -1;
    }

    > .titles {
      grid-area: titles;
      text-align: left;
      > h1 {
        font-size: 3.2rem;
        font-weight: 300;
        font-family: ${props => props.theme.FONTS.Primary};
      }
      > p {
        padding: 1.6rem 0 3.2rem 0;
        font-weight: bold;
        font-size: 2rem;

        color: ${({ theme }) => theme.COLORS['blue-sky']};
      }
    }
    > .form {
      grid-area: form;
      border-radius: 0.8rem;
    }

    > .contact {
      display: flex;
      flex-direction: column;
      grid-area: contact;
      position: relative;
      justify-content: space-between;
    }
  }
`
