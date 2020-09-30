const reducer = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE':
            return action.data
        default:
            return state
    }
}

export const updateFilter = (msg) => {
    return {
        type: 'UPDATE',
        data: msg
    }
}

export default reducer