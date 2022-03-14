import { useState } from 'react'

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl text-center font-semibold">Okay card helper</h1>
      <div className="flex">
        <Card color="red" number={1} />
        <Card color="red" number={2} />
        <Card color="red" number={3} />
        <Card color="red" number={4} />
        <Card color="red" number={5} />
        <Card color="red" number={6} />
        <Card color="red" number={7} />
        <Card color="red" number={8} />
      </div>
      <div className="flex">
        <Card color="blue" number={1} />
        <Card color="blue" number={2} />
        <Card color="blue" number={3} />
        <Card color="blue" number={4} />
        <Card color="blue" number={5} />
        <Card color="blue" number={6} />
        <Card color="blue" number={7} />
        <Card color="blue" number={8} />
      </div>
      <div className="flex">
        <Card color="yellow" number={1} />
        <Card color="yellow" number={2} />
        <Card color="yellow" number={3} />
        <Card color="yellow" number={4} />
        <Card color="yellow" number={5} />
        <Card color="yellow" number={6} />
        <Card color="yellow" number={7} />
        <Card color="yellow" number={8} />
      </div>
    </div>
  )
}
interface CardProps {
  color: 'red' | 'blue' | 'yellow'
  number: number
}

function Card({ color, number }: CardProps) {
  const [inactive, setInactive] = useState(false)

  const handleClick = () => {
    setInactive(prevState => !prevState)
  }

  const ab = inactive && 'bg-gray-300'

  const colors = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
  }
  return (
    <button
      className={`${colors[color]} border border-gray-800 w-20 h-20 flex justify-center items-center ${ab}`}
      onClick={handleClick}
    >
      {number}
    </button>
  )
}
