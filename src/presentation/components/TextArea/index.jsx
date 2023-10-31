import { TextAreaContainer } from './styles'

/**
 * Creates a styled TextArea component.
 * Any other props of textarea can be passed to the TextArea component.
 * @return {JSX.Element} The styled TextInput component.
 */
export function TextArea({ ...rest }) {
  return <TextAreaContainer {...rest} />
}
