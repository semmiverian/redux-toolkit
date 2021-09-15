import './App.css'
import Counter from './features/counter/Counter'
import UserList from './features/user/UserList'

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-300 to-violet-500">
      <section className="max-w-2xl mx-auto p-4">
        {/* <Counter /> */}
        <UserList />
      </section>
    </main>
  )
}

export default App
