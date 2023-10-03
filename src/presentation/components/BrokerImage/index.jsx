import { Container } from './styles'
import CorretorImg from '../../assets/CorretorImg.png'
import Elipses from '../../assets/elipses.svg'

export function BrokerImage({ removeelipses = false }) {
  return (
    <Container $removeelipses={removeelipses}>
      <div className="Images">
        <img src={CorretorImg} alt="Imagem do Corretor" />
        {!removeelipses && <img src={Elipses} alt="" />}
      </div>
    </Container>
  )
}
