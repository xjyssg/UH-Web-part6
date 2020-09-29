import React from 'react'
import NewAnecdote from './components/NewAnecdote'
import DisplayAnecdotes from './components/DisplayAnecdotes'


const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <DisplayAnecdotes />
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App