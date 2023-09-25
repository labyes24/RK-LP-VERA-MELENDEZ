import { Container, StyledVideo, FallbackText } from './styles'
import video from '../../assets/video-sample.mp4'

export function Video() {
  return (
    <Container>
      <StyledVideo controls autoPlay muted loop>
        <source src={video} type="video/mp4" />
        <button type="button">+</button>
      </StyledVideo>
    </Container>
  )
}
