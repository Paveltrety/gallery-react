let initialState = {
    albums: [],
    photos: [],
    isLoadedAlbums: false,
    isLoadedPhotos: false


}

const albumReducer = (state = initialState, action) => {

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
            }
            
        case 'SET_LOADED_PHOTOS_FALSE':
            return {
                ...state,
                isLoadedPhotos: false
            }

        default:
            return state
    }

}

export default albumReducer;




