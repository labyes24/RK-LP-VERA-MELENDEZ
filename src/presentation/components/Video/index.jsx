import { Container, StyledVideo } from './styles'
import video from '../../assets/video-sample.mp4'

export function Video() {
  return (
    <Container>
      <StyledVideo controls autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </StyledVideo>
    </Container>
  )
}
