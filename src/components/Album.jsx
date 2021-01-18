import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

import { fetchAlbums, fetchPhotos, setLoadedAlbumsFalse, setLoadedPhotosFalse } from '../redux/actions/albumAction';
import Loaded from './Loaded';



const Album = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();

    const state = useSelector(state => ({
        albums: state.albums.albums,
        photos: state.albums.photos,
        isLoadedAlbums: state.albums.isLoadedAlbums,
        isLoadedPhotos: state.albums.isLoadedPhotos
    }))


    let sumPhotos = (idAlbum) => {
        let length = state.photos.filter(item => idAlbum === item.albumId)
        return length.length
    }

    let coverAlbum = (idAlbum) => {
        let cover = state.photos.find(item => idAlbum === item.albumId)
        return cover.url
    }

    useEffect(() => {
        dispatch(fetchPhotos())
        dispatch(fetchAlbums(userId))
        return () => {
            dispatch(setLoadedAlbumsFalse())
            dispatch(setLoadedPhotosFalse())
        }
    }, [dispatch, userId]);


    return (
        <>
            {!(state.isLoadedAlbums && state.isLoadedPhotos) ? <Loaded /> :
                <div className="albums">
                <h1 className="albums__title">List of albums</h1>
                    <div className="albums__items">
                        {
                            state.albums.map(item => {

                                return (
                                    <NavLink to={`/photos/${item.id}`} key={item.id}>
                                    <div className="album__item" key={item.id}>
                                        <img src={coverAlbum(item.id)} alt={item.title} />
                                        <div className="album__item-content">
                                            <h2 className="content__count">
                                                {sumPhotos(item.id)}
                                            </h2>
                                            <p className="content__desc">{item.title}</p>
                                            
                                        </div>
                                    </div>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </>




    )
}

export default Album;
