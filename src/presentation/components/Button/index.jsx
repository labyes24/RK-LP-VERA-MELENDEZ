import { Spinner } from '../Spinner'

import { StyledButton } from './styles'

export function Button({
  children,
  size = 'small',
  isLoading = false,
  ...props
}) {
  return (
    <StyledButton $size={size} {...props}>
      {isLoading ? <Spinner size="small" /> : children}
    </StyledButton>
  )
}
