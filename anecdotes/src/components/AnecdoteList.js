import React from 'react'
import {increaseVote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'
import { connect } from 'react-redux'


const AnecdoteList = (props) => {
    const orderedAnecdotes = props.anecdotes.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)

    return (
        <div>
          {orderedAnecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
              {anecdote.content}
              </div>
              <div>
              has {anecdote.votes}
              <button onClick={() => {
                props.increaseVote(anecdote)
                props.setNotification(`you voted '${anecdote.content}'`, 5)
              }}>vote</button>
              </div>
            </div>
          )}
        </div>
    )
}

const mapStateToProps = (state) => {
  const filter = state.filter
  return {
    anecdotes: state.anecdotes.filter(
      anecdote => anecdote.content.indexOf(filter) !== -1
    )
  }
}

const mapDispatchToProps = {
  increaseVote,
  setNotification
}


const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList