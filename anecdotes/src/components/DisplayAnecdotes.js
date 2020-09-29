import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increaseVote} from '../reducers/anecdoteReducer'


const DisplayAnecdotes = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()
    const orderedAnecdotes = anecdotes.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)
    return (
        <div>
          {orderedAnecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
              {anecdote.content}
              </div>
              <div>
              has {anecdote.votes}
              <button onClick={() => dispatch(increaseVote(anecdote.id))}>vote</button>
              </div>
            </div>
          )}
        </div>
    )
}

export default DisplayAnecdotes