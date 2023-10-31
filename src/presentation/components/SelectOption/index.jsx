import { SelectContainer } from './styles'

/**
 * Creates a styled SectionOption component.
 * Any other props of a select can be passed to the SelectOption component.
 * options are rendered as children in a <option> tag.
 * @return {JSX.Element} The styled SelectOption component.
 */
export function SelectOption({ children, ...rest }) {
  return <SelectContainer {...rest}>{children}</SelectContainer>
}
