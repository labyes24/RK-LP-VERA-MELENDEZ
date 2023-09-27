import { useState } from 'react'

import { Container, StyledVideo } from './styles'

import video from '../../assets/video-sample.mp4'

export function Video({ src = video, ...rest }) {
  const [videoError, setVideoError] = useState(false)

  return (
    <Container>
      {!videoError ? (
        <StyledVideo
          controls
          autoPlay
          muted
          loop
          onError={() => setVideoError(true)}
          {...rest}
        >
          <source src={src} type="video/mp4" />
        </StyledVideo>
      ) : (
        <p>Erro ao carregar o vídeo.</p>
      )}
    </Container>
  )
}
