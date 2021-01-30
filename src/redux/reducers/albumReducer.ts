import { albumActionTypes } from "../actions/albumAction"

type initialStateType = {
    albums: Array<albumsType>
    photos: Array<photosType>
    isLoadedAlbums: boolean
    isLoadedPhotos: boolean
}
export type albumsType = {
    userId: number
    id: number
    title: string
}
export type photosType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
let initialState: initialStateType = {
    albums: [],
    photos: [],
    isLoadedAlbums: false,
    isLoadedPhotos: false
}

const albumReducer = (state = initialState, action: albumActionTypes): initialStateType => {
    switch (action.type) {
        case 'ADD_ALBUMS':
            return {
                ...state,
                albums: action.payload,
                isLoadedAlbums: true
            }
        case 'ADD_PHOTO':
            return {
                ...state,
                photos: action.payload,
                isLoadedPhotos: true
            }
        case 'SET_LOADED_ALBUMS_FALSE':
            return {
                ...state,
                isLoadedAlbums: false,
                albums: []
            }
        case 'SET_LOADED_PHOTOS_FALSE':
            return {
                ...state,
                isLoadedPhotos: false,
                albums: []
            }
        default:
            return state
    }
}

export default albumReducer;




