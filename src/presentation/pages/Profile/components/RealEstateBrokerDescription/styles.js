import styled from 'styled-components'

export const Container = styled.div`
  padding: 7.6rem 3.5rem 4.5rem 3.5rem;

  display: flex;
  flex-direction: column;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS['zinc-500']};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2.4rem 4.8rem 2.4rem 3.5rem;

    article {
      margin: 0 0 0 0;
      max-width: 640px;
    }
  }
`

export const ImageContainer = styled.div`
  width: 390px;

  > div {
    position: absolute;
    top: 30%;
    left: 43%;
    transform: translate(-50%, -50%);

    .Images {
      position: relative;

      img:nth-child(1),
      img:nth-child(2) {
        position: absolute;
        top: -28rem;
        width: 16.7rem;
        transform: translateX(-30%);
      }
    }
  }

  @media screen and (min-width: 1440px) {
    position: relative;

    .Images {
      img:nth-child(1),
      img:nth-child(2) {
        top: -8rem !important;
        left: 1rem;
        transform: translate(-50%, -50%);
        scale: 2.5;
      }
    }
  }
`

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2.4rem;

  h4 {
    font-weight: 700;
  }

  span {
    font-weight: 300;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 1.6rem;
    gap: 8.4rem;

    h4 {
      font-size: 3.6rem;
    }

    span {
      font-size: 1.6rem;
    }
  }
`

export const CopyGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.4rem;

  strong,
  p {
    line-height: 140%;
    font-size: 12px;
    font-family: ${({ theme }) => theme.FONTS.Secondary};
  }

  strong {
    font-weight: 700;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;

    strong,
    p {
      font-size: 1.6rem;
    }

    strong,
    :nth-child(2) {
      margin-bottom: 2.2rem;
    }
  }
`

export const LinksCard = styled.div`
  padding: 1rem 0 1rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS['zinc-500']};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.white};
    word-break: break-all;
  }

  @media screen and (min-width: 1440px) {
    padding: 0.8rem 1.6rem;
    gap: 1.6rem;
    margin-left: 0.8rem;
    height: fit-content;
    align-self: end;

    a {
      word-break: normal;
    }
  }
`
