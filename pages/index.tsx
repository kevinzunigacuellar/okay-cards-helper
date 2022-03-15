import { useState } from 'react'
import useDeck from 'hooks/useDeck'

const INITIAL_DECK: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Home() {
  const { cards: blueCards, setCards: setBlueDeck, solution: blueSolution } = useDeck(INITIAL_DECK)
  const { cards: redCards, setCards: setRedDeck, solution: redSolution } = useDeck(INITIAL_DECK)
  const {
    cards: yellowCards,
    setCards: setYellowDeck,
    solution: yellowSolution,
  } = useDeck(INITIAL_DECK)

  return (
    <div>
      <h1 className="text-5xl text-center font-semibold my-8">Okay card helper</h1>
      <div className="flex justify-center">
        {INITIAL_DECK.map(card => (
          <Card color="blue" number={card} key={card} setCards={setBlueDeck} cards={blueCards} />
        ))}
      </div>
      <code>{JSON.stringify(blueSolution, null, 2)}</code>
      <div className="flex justify-center">
        {INITIAL_DECK.map(card => (
          <Card color="red" number={card} key={card} setCards={setRedDeck} cards={redCards} />
        ))}
      </div>
      <code>{JSON.stringify(redSolution, null, 2)}</code>
      <div className="flex justify-center">
        {INITIAL_DECK.map(card => (
          <Card
            color="yellow"
            number={card}
            key={card}
            setCards={setYellowDeck}
            cards={yellowCards}
          />
        ))}
      </div>
      <code>{JSON.stringify(yellowSolution, null, 2)}</code>
    </div>
  )
}
interface CardProps {
  color: 'red' | 'blue' | 'yellow'
  number: number
  setCards: (cards: number[]) => void
  cards: number[]
}

function Card({ color, number, setCards, cards }: CardProps) {
  const [isActive, setIsActive] = useState(true)
  const handleClick = () => {
    if (isActive) {
      setCards(cards.filter(card => card !== number))
    } else {
      setCards([...cards, number])
    }
    setIsActive(!isActive)
  }
  const colors = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
  }
  return (
    <button
      className={`${
        colors[color]
      } border border-gray-800 w-20 h-20 flex justify-center items-center ${
        !isActive ? 'bg-gray-400' : ''
      }`}
      onClick={handleClick}
    >
      {number}
    </button>
  )
}
