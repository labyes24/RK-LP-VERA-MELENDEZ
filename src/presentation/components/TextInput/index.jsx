import { TextInputContainer } from './styles'

/**
 * Creates a styled TextInput component.
 * Any other props of input can be passed to the TextInput component.
 *
 * @param {string} props.type - The type of the input field (defaults to 'text').
 * @return {JSX.Element} The styled TextInput component.
 */
export function TextInput({ type = 'text', ...rest }) {
  return <TextInputContainer type={type} {...rest} />
}
