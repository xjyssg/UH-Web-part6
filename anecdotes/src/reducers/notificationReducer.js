const reducer = (state = '', action) => {
  switch(action.type) {
    case 'SET':
      return action.data
    default:
      return state
  }
}

export const showNotification = (msg) => {
  return {
    type: 'SET',
    data: `you voted '${msg}'`
  }
}

export const hideNotification = () => {
  return {
    type: 'SET',
    data: ''
  }
}

export const setNotification = (content, time) => {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms * 1000))

  return async dispatch => {
    dispatch({
      type: 'SET',
      data: content
    })
    
    await delay(time)

    dispatch({
      type: 'SET',
      data: ''
    })
  }
}

export default reducer