export const addUsers = (users) => ({
    type: 'ADD_USERS',
    payload: users
})

export const fetchUsers = () => (dispatch) => {
    dispatch(setLoadingUsers(false))
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(addUsers(json)))
}

export const setLoadingUsers = (value) => ({
    type: 'SET_LOADING_USERS',
    payload: value
})

export const setActiveUser = (userId) => ({
    type: 'SET_ACTIVE_USER',
    payload: userId
})

