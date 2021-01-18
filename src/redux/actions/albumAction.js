export const addAlbums = (albums) => ({
    type: 'ADD_ALBUMS',
    payload: albums
})

export const addPhoto = (albums) => ({
    type: 'ADD_PHOTO',
    payload: albums
})


export const fetchAlbums = (userId) => (dispatch) => {
    dispatch(setLoadedAlbumsFalse())
    fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${userId}`)
        .then(response => response.json())
        .then(json => dispatch(addAlbums(json)))
}

export const fetchPhotos = () => (dispatch) => {
    dispatch(setLoadedPhotosFalse())
    fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(response => response.json())
        .then(json => dispatch(addPhoto(json)))
}


export const setLoadedAlbumsFalse = () => ({
    type: 'SET_LOADED_ALBUMS_FALSE',
})

export const setLoadedPhotosFalse = () => ({
    type: 'SET_LOADED_PHOTOS_FALSE',
})
