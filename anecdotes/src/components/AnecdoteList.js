import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increaseVote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const filter = useSelector(state => state.filter)
    const anecdotes = useSelector(state => state.anecdotes.filter(
      anecdote => anecdote.content.indexOf(filter) !== -1
    ))
    const dispatch = useDispatch()
    const orderedAnecdotes = anecdotes.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)

    const voteHandler = (anecdote) => {
      dispatch(increaseVote(anecdote))
      dispatch(setNotification(`you voted '${anecdote.content}'`, 2))
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