import propTypes from 'prop-types'
import { CardContainer } from './styles'

/**
 * Renders a card component with a quote and an optional author.
 *
 * @param {string} quote - The quote to display in the card.
 * @param {string | undefined} author - The optional author of the quote.
 * @return {JSX.Element} The rendered card component.
 */
export function Card({ quote, author = undefined }) {
  return (
    <CardContainer>
      <blockquote>{`"${quote}"`}</blockquote>
      {author && <cite>{author}</cite>}
    </CardContainer>
  )
}

Card.propTypes = {
  quote: propTypes.string.isRequired,
  author: propTypes.string,
}
