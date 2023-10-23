import { Spinner } from '../Spinner'

import { StyledButton } from './styles'

export function Button({ children, size = 'small', isLoading = false }) {
  return (
    <StyledButton $size={size}>
      {isLoading ? <Spinner size="small" /> : children}
    </StyledButton>
  )
}
