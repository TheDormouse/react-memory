const { Card } = require("../Card")
import styles from './board.module.css'
import cards from './cards.json'
import PropTypes from 'prop-types'

export const Board = ({count = 4}) => {
    const [deck, setDeck] = React.useState([])
    const [shuffled, setShuffled] = React.useState([])
    function makeCards(count){
        setDeck([])
        let num = new Array(count).fill(' ')
        console.log(num)
        return num.map((num, i) => {;
            let card = cards.sort(() => Math.random() - 0.5)[i]
            setDeck([...deck, card, card])
        })
    }

    React.useEffect(() => {
        let newdeck = []
        for(var i=0;i<count;i++){
            let card = cards.sort(() => Math.random() - 0.5)[i]
            console.log('hi')
            newdeck.push(card, card)
        }

        setDeck(newdeck.sort(() => Math.random() - 0.5))
    }, [count])
    return(
        <div className={styles.board}>
            {deck.length ? deck.map((card, key) => {
                return <Card suit={card.suit} card={card.card} />
            }) : <p>shuffling..</p>}
        </div>
    )
}

Board.propTypes = {
    count: PropTypes.number
}

// {Array(count).fill(<><Card /><Card /></>).sort(() => Math.random() - 0.5)}