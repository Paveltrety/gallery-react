let initialState = {
    photos: [],
    fullPhoto: null,
    isLoaded: false,
    modalActive: false,
    indexPhotoActive: null,

}

const photoReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_PHOTO':
            return {
                ...state,
                photos: action.payload,
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
                fullPhoto: state.photos.find(item => item.id === action.photoId),
                modalActive: action.status,
                indexPhotoActive: action.indexPhoto
            }

        default:
            return state
    }

}

export default photoReducer;
