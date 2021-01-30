import { userActionTypes } from "../actions/usersAction"

type initialStateType = {
    users: Array<usersType>
    isLoaded: boolean
    activeUser: number | null
}
type geoType = {
    lat:string
    lng:string
}
type addressType = {
    street:string
    suite:string
    city:string
    zipcode:string
    geo: geoType
}
export type usersType = {
    id: number
    name: string
    username: string
    email: string
    address:addressType
}
let initialState: initialStateType = {
    users: [],
    isLoaded: false,
    activeUser: null
}

const usersReducer = (state = initialState, action: userActionTypes):initialStateType  => {
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
