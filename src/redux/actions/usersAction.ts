import { Dispatch } from "redux"
import { usersType } from "../reducers/usersReducer"

const ADD_USERS = "ADD_USERS"
const SET_LOADING_USERS = "SET_LOADING_USERS"
const SET_ACTIVE_USER = "SET_ACTIVE_USER"

export type userActionTypes = addUsersType | setLoadingUsersType | setActiveUserType

type addUsersType = {
    type:typeof ADD_USERS
    payload: Array<usersType>
}
type setLoadingUsersType = {
    type:typeof SET_LOADING_USERS
    payload: boolean
}
type setActiveUserType = {
    type:typeof SET_ACTIVE_USER
    payload: number
}

export const addUsers = (users: Array<usersType>): addUsersType => ({
    type: ADD_USERS,
    payload: users
})

export const fetchUsers = () => (dispatch: Dispatch<userActionTypes>) => {
    dispatch(setLoadingUsers(false))
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(addUsers(json)))
}

export const setLoadingUsers = (value: boolean): setLoadingUsersType => ({
    type: SET_LOADING_USERS,
    payload: value
})

export const setActiveUser = (userId: number): setActiveUserType => ({
    type: SET_ACTIVE_USER,
    payload: userId
})

