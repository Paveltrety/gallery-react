import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { fetchPhotoForAlbum, setModalActive } from '../redux/actions/photoAction';
import Loaded from './Loaded';
import Modal from './Modal';



const Photos = () => {
    const { albumId } = useParams();
    const history = useHistory()
    const dispatch = useDispatch();

    const state = useSelector(state => ({
        photos: state.photos.photos,
        isLoaded: state.photos.isLoaded,
        modalActive: state.photos.modalActive,
        fullPhoto: state.photos.fullPhoto,
        indexPhotoActive: state.photos.indexPhotoActive
    }))

    let photosLength = state.photos.length;



    useEffect(() => {
        dispatch(fetchPhotoForAlbum(albumId))
    }, [dispatch, albumId]);

    let goBackHandle = () => {
        history.goBack()
    }

    return (
        <>
            {!state.isLoaded ? <Loaded /> :
                <div className="photos">
                    <button onClick={goBackHandle} className="photos__btn">Back</button>  
                    <h1 className="photos__title">List of photos in the album</h1>
                    <div className="photos__items">
                        {
                            state.photos.map((item, index) => {
                                return (
                                    <div className="photos__item" key={item.id} onClick={() => dispatch(setModalActive(true, item.id, index))} >
                                        <img src={item.thumbnailUrl} alt={item.title} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
            {state.modalActive &&
                <Modal {...state.fullPhoto}
                    modalActive={state.modalActive}
                    setModalActive={(status, photoId, indexPhotoActive) => dispatch(setModalActive(status, photoId, indexPhotoActive))}
                    indexPhotoActive={state.indexPhotoActive}
                    photosLength={photosLength}
                />}
        </>
    )
}

export default Photos;
