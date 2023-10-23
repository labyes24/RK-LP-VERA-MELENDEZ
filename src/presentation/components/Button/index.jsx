import { StyledButton } from './styles'

export function Button({ children, size = 'small' }) {
  return <StyledButton $size={size}>{children}</StyledButton>
}
