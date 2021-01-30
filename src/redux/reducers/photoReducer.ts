import { photoActionTypes } from "../actions/photoAction"

type initialStateType = {
    photosForAlbum: Array<typePhotoInfo>
    fullPhoto: typePhotoInfo | null | undefined
    isLoaded: boolean
    modalActive: boolean
    indexPhotoActive: number | null
}
export type typePhotoInfo={
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl:string
}

let initialState: initialStateType = {
    photosForAlbum: [],
    fullPhoto: null,
    isLoaded: false,
    modalActive: false,
    indexPhotoActive: null,
}

const photoReducer = (state = initialState, action: photoActionTypes): initialStateType => {

    switch (action.type) {

        case 'ADD_PHOTO_FOR_ALBUM':
            return {
                ...state,
                photosForAlbum: action.payload,
                isLoaded: true
            }

        case 'SET_LOADING_FALSE':
            return {
                ...state,
                isLoaded: false
            }

        case 'SET_MODAL_ACTIVE':
            return {
                ...state,
                fullPhoto: state.photosForAlbum.find((item:any) => item.id === action.photoId),
                modalActive: action.status,
                indexPhotoActive: action.indexPhoto
            }

        default:
            return state
    }

}

export default photoReducer;
