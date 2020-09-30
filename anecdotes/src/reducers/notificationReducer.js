const reducer = (state = 'initial msg', action) => {
    switch(action.type) {
        case 'SET':
            return action.data
        default:
            return state
    }
}

export default reducer