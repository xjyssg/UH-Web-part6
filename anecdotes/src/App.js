import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import DisplayAnecdotes from './components/DisplayAnecdotes'


const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <DisplayAnecdotes />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App