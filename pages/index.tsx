import { useState, useEffect } from 'react'

const INITIAL_SOLUTION: [number, number, number][] = [
  [6, 7, 8],
  [5, 6, 7],
  [4, 5, 6],
  [3, 4, 5],
  [2, 3, 4],
  [1, 2, 3],
]

const INITIAL_DECK: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Home() {
  const [cards, setCards] = useState(INITIAL_DECK)
  const [solution, setSolution] = useState<[number, number, number][]>(INITIAL_SOLUTION)

  useEffect(() => {
    const updatedSolution = INITIAL_SOLUTION.filter(a => {
      for (let i = 0; i < a.length; i++) {
        if (!cards.includes(a[i])) {
          return false
        }
      }
      return true
    })
    setSolution(updatedSolution)
  }, [cards])
  return (
    <div>
      <h1 className="text-5xl text-center font-semibold">Okay card helper</h1>
      <div className="flex">
        {INITIAL_DECK.map(card => (
          <Card color="blue" number={card} key={card} setCards={setCards} cards={cards} />
        ))}
      </div>
      <code>{JSON.stringify(solution, null, 2)}</code>
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
