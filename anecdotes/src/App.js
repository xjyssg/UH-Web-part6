import React, {useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import ConnectedAnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import ConnectedFilter from './components/Filter'
import {initializeAnecdotes} from './reducers/anecdoteReducer'
import {useDispatch} from 'react-redux'


const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <ConnectedFilter />
      <ConnectedAnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App