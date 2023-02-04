import {useEffect, useState} from 'react'
import axios from 'axios'
import CardItem from './CardItem'

const CardsList = () => {
  const [cards, setCards] = useState([])
  useEffect(() => {
    const getCards = async () => {
      const {data} = await axios.get('/api/cards')
      setCards(data)
    }
    getCards()
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map(card => (
        <CardItem key={card.id} card={card} />
      ))}

    </div>
  )
}

export default CardsList