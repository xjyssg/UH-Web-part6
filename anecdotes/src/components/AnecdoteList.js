import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increaseVote} from '../reducers/anecdoteReducer'
import {showNotification, hideNotification} from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
    const orderedAnecdotes = anecdotes.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)

    const voteHandler = (anecdote) => {
      dispatch(increaseVote(anecdote.id))
      dispatch(showNotification(anecdote.content))
      setTimeout(() => {
        dispatch(hideNotification())
      }, 5000)
    }

    return (
        <div>
          {orderedAnecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
              {anecdote.content}
              </div>
              <div>
              has {anecdote.votes}
              <button onClick={() => voteHandler(anecdote)}>vote</button>
              </div>
            </div>
          )}
        </div>
    )
}

export default AnecdoteList