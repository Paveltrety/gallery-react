import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

import { fetchAlbums, fetchPhotos, setLoadedAlbumsFalse } from '../redux/actions/albumAction';
import { albumsType, photosType } from '../redux/reducers/albumReducer'
import { stateType } from '../redux/store';
import Loaded from './Loaded';

type useParamsType = {
    userId: string
}

const Album = () => {
    const { userId } = useParams<useParamsType>();
    const dispatch = useDispatch();

    const state = useSelector((state: stateType) => ({
        albums: state.albums.albums,
        photos: state.albums.photos,
        isLoadedAlbums: state.albums.isLoadedAlbums,
        isLoadedPhotos: state.albums.isLoadedPhotos
    }))

    let sumPhotos = (idAlbum: number) => {
        let length = state.photos.filter((item: photosType) => idAlbum === item.albumId)
        return length.length
    }

    let coverAlbum = (idAlbum: number) => {
        let cover: photosType | undefined
        cover = state.photos.find((item: photosType) => idAlbum === item.albumId)
        return cover?.url
    }

    useEffect(() => {
        if (state.photos.length === 0) dispatch(fetchPhotos())
        dispatch(fetchAlbums(+userId))
        return () => {
            dispatch(setLoadedAlbumsFalse())
           // dispatch(setLoadedPhotosFalse())
        }
    }, [dispatch, userId, state.photos.length]);

    return (
        <>
            {!(state.isLoadedAlbums && state.isLoadedPhotos) ? <Loaded /> :
                <div className="albums">
                    <h1 className="albums__title">List of albums</h1>
                    <div className="albums__items">
                        {
                            state.albums.map((item: albumsType) => {

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
