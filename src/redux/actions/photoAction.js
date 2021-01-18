export const addPhoto = (albums) => ({
    type: 'ADD_PHOTO',
    payload: albums
})

export const fetchPhotoForAlbum = (albumId) => (dispatch) => {
    dispatch(setLoadingFalse())
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => response.json())
        .then(json => dispatch(addPhoto(json)))
}

export const setLoadingFalse = () => ({
    type: 'SET_LOADING_FALSE',
})

export const setModalActive = (status, photoId, indexPhoto) => ({
    type: 'SET_MODAL_ACTIVE',
    status,
    photoId,
    indexPhoto
})