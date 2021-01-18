let initialState = {
    users: [],
    isLoaded: false,
    activeUser: null
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_USERS':
            return {
                ...state,
                users: action.payload,
                isLoaded: true
            }
        case 'SET_LOADING_USERS':
            return {
                ...state,
                isLoaded: action.payload
            }
        case 'SET_ACTIVE_USER':
            return {
                ...state,
                activeUser: action.payload
            }

        default:
            return state
    }

}

export default usersReducer;
