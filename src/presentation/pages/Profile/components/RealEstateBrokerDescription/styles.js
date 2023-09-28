import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 7.6rem 3.5rem 4.5rem 3.5rem;

  display: flex;
  flex-direction: column;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS['zinc-500']};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

export const ImageContainer = styled.div`
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  }
`
