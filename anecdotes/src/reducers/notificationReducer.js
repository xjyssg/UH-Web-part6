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

var timeID

export const setNotification = (content, time) => {
  return async dispatch => {
    clearTimeout(timeID)
    const timeout = (ms) => {
      return new Promise(resolve => {
        timeID = setTimeout(resolve, ms * 1000)
      });
    }
    dispatch({
      type: 'SET',
      data: content
    })
    await timeout(time)
    dispatch({
      type: 'SET',
      data: ''
    })
  }
}

export default reducer