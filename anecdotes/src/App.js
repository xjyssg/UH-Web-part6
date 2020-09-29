import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NewAnecdote from './components/NewAnecdote'
import DisplayAnecdotes from './components/DisplayAnecdotes'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

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