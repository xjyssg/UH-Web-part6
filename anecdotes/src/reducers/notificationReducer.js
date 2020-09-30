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

export default reducer