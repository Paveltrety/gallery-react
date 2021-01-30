import { Dispatch } from "redux"
import { albumsType, photosType } from "../reducers/albumReducer"

const ADD_ALBUMS = 'ADD_ALBUMS'
const ADD_PHOTO = 'ADD_PHOTO'
const SET_LOADED_ALBUMS_FALSE = 'SET_LOADED_ALBUMS_FALSE'
const SET_LOADED_PHOTOS_FALSE = 'SET_LOADED_PHOTOS_FALSE'

export type albumActionTypes = addAlbumsType | addPhotoType | setLoadedAlbumsFalseType | setLoadedPhotosFalseType

type addAlbumsType = {
    type: typeof ADD_ALBUMS
    payload: Array<albumsType>
}

type addPhotoType = {
    type: typeof ADD_PHOTO
    payload: Array<photosType>
}

type setLoadedAlbumsFalseType = {
    type: typeof SET_LOADED_ALBUMS_FALSE
}

type setLoadedPhotosFalseType = {
    type: typeof SET_LOADED_PHOTOS_FALSE
}
export const addAlbums = (albums: Array<albumsType>): addAlbumsType => ({
    type: ADD_ALBUMS,
    payload: albums
})

export const addPhoto = (photo: Array<photosType>): addPhotoType => ({
    type: ADD_PHOTO,
    payload: photo
})

export const fetchAlbums = (userId: number) => (dispatch: Dispatch<albumActionTypes>) => {
    // dispatch(setLoadedAlbumsFalse())
    fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${userId}`)
        .then(response => response.json())
        .then(json => dispatch(addAlbums(json)))
}

export const fetchPhotos = () => (dispatch: Dispatch<albumActionTypes>) => {
    //  dispatch(setLoadedPhotosFalse())
    fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(response => response.json())
        .then(json => dispatch(addPhoto(json)))
}

export const setLoadedAlbumsFalse = (): setLoadedAlbumsFalseType => ({
    type: SET_LOADED_ALBUMS_FALSE
})

export const setLoadedPhotosFalse = (): setLoadedPhotosFalseType => ({
    type: SET_LOADED_PHOTOS_FALSE
})
