import { useState, useEffect } from 'react'

const INITIAL_SOLUTION: [number, number, number][] = [
  [6, 7, 8],
  [5, 6, 7],
  [4, 5, 6],
  [3, 4, 5],
  [2, 3, 4],
  [1, 2, 3],
]

export default function useDeck(INITIAL_DECK: number[]) {
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

  return { cards, setCards, solution }
}
