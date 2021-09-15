import { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="bg-white p-3 shadow rounded-md w-full">
      <h1 className="leading-8 mb-4">Counter</h1>

      <div className="flex justify-between items-baseline">
        <button
          onClick={() => setCounter(counter - 1)}
          className="bg-gradient-to-r from-green-400 to-sky-500 py-2 px-4 text-sky-100 rounded-md shadow hover:from-amber-400 hover:to-rose-500  transition ease-in-out"
        >
          Kurangkan Angka
        </button>

        <h2 className="text-xl leading-8 tracking-wide">{counter}</h2>
        <button
          onClick={() => setCounter(counter + 1)}
          className="bg-gradient-to-r from-green-400 to-sky-500 py-2 px-4 text-sky-100 rounded-md shadow hover:from-amber-400 hover:to-rose-500  transition ease-in-out"
        >
          Tambahkan Angka
        </button>
      </div>
    </div>
  )
}
