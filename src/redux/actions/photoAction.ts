import { Dispatch } from "redux"
import { typePhotoInfo } from "../reducers/photoReducer"

const ADD_PHOTO_FOR_ALBUM = 'ADD_PHOTO_FOR_ALBUM'
const SET_LOADING_FALSE = 'SET_LOADING_FALSE'
const SET_MODAL_ACTIVE = 'SET_MODAL_ACTIVE'

export type photoActionTypes = addPhotoforAlbumType | setLoadingFalseType | setModalActiveType

type addPhotoforAlbumType = {
    type: typeof ADD_PHOTO_FOR_ALBUM
    payload: Array<typePhotoInfo>
}

type setLoadingFalseType = {
    type: typeof SET_LOADING_FALSE
}

type setModalActiveType = {
    type: typeof SET_MODAL_ACTIVE
    status: boolean
    photoId: number
    indexPhoto: number
}
export const addPhotoforAlbum = (albums: Array<typePhotoInfo>): addPhotoforAlbumType => ({
    type: ADD_PHOTO_FOR_ALBUM,
    payload: albums
})

export const fetchPhotoForAlbum = (albumId: number) => (dispatch: Dispatch<photoActionTypes>) => {
    dispatch(setLoadingFalse())
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => response.json())
        .then(json => dispatch(addPhotoforAlbum(json)))
}

export const setLoadingFalse = (): setLoadingFalseType => ({
    type: SET_LOADING_FALSE
})

export const setModalActive = (status: boolean, photoId: number, indexPhoto: number): setModalActiveType => ({
    type: SET_MODAL_ACTIVE,
    status,
    photoId,
    indexPhoto
})