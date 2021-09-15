import { useState, useEffect } from 'react'
import User from './User'
import { IUser } from './interface'

export default function UserList() {
  const [users, setUsers] = useState<IUser[]>([])
  const [limit, setLimit] = useState(5)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${limit}`)
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .finally(() => setLoading(false))

    return function () {
      console.log('Cleanup function')
    }
  }, [limit])

  function addLimit() {
    setLimit(limit + 5)
  }

  return (
    <div className="bg-white p-3 shadow rounded-md w-full">
      <div className="flex justify-between items-baseline">
        <h1 className="leading-8 mb-4">User Data</h1>
        <button
          onClick={addLimit}
          className="bg-gradient-to-r from-green-400 to-sky-500 py-2 px-4 text-sky-100 rounded-md shadow hover:from-amber-400 hover:to-rose-500 transition ease-in-out"
        >
          Add More Data
        </button>
      </div>
      <ul className="list-none divide-y divide-gray-200">
        {users.map((user) => (
          <User key={user.login.uuid} user={user} />
        ))}
      </ul>
    </div>
  )
}
