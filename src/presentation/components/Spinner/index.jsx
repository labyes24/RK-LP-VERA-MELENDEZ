import { Loader, SmallLoader } from './styles'

export function Spinner({ size }) {
  return size === 'small' ? <SmallLoader /> : <Loader />
}
