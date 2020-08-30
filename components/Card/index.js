import { useSpring, animated as a } from 'react-spring'
import styles from './card.module.css'
import PropTypes from 'prop-types'
import cards from './cards.json'

export const Card = ({suit = 'Hearts', card = 'Ace'}) => {
    const [flipped, set] = React.useState(false)
    const cardCol = cards[suit][card].col * -360;
    const cardRow = cards[suit][card].row * -504;
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
      <div onClick={() => set(state => !state)}>
        <a.div className={`${styles.card} ${styles.back}`} style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
        <a.div className={`${styles.card} ${styles.front}`}  style={{ backgroundPosition: `${cardCol}px ${cardRow}px` ,opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
      </div>
    )
}

Card.propTypes = {
    suit: PropTypes.oneOf(['Hearts', 'Clubs', 'Spades', 'Diamonds']),
    card: PropTypes.oneOf(['Ace', 'King', 'Queen', 'Jack', 2, 3, 4, 5, 6, 7, 8, 9, 10])
}