import { Container, TagsWrapper } from './styles'
import { Tag } from '../../Tags'
import garageIcon from '../../../assets/garage-icon.svg'
import roomIcon from '../../../assets/room-icon.svg'
import squareIcon from '../../../assets/square-icon.svg'
import showerIcon from '../../../assets/shower-icon.svg'

export function TagsTest() {
  return (
    <Container>
      <main>
        <h2>Test das Tags</h2>
        <TagsWrapper>
          <Tag src={squareIcon} title="70m²" />
          <Tag src={showerIcon} title="2" />
          <Tag src={roomIcon} title="2" />
          <Tag src={garageIcon} title="2" />
        </TagsWrapper>
      </main>
    </Container>
  )
}
