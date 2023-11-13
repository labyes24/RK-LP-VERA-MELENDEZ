import { Container } from './styles'
import Elipses from '../../assets/elipses.svg'
import { useBrokerProfile } from '../../../data/BrokerData'

export function BrokerImage({ removeelipses = false }) {
  const brokerData = useBrokerProfile()
  return (
    <Container $removeelipses={removeelipses}>
      <div className="Images">
        <img src={brokerData.profileImage} alt="Imagem do Corretor" />
        {!removeelipses && <img src={Elipses} alt="" />}
      </div>
    </Container>
  )
}
