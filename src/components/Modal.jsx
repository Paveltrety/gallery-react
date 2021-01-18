import React from 'react';


const Modal = (props) => {

    let nextOne = () => {
        if (props.indexPhotoActive < props.photosLength - 1) {
            props.setModalActive(true, props.id + 1, props.indexPhotoActive + 1)
        }
    }

    let prevOne = () => {
        if (props.indexPhotoActive > 0) {
            props.setModalActive(true, props.id - 1, props.indexPhotoActive - 1)
        }
    }

    let closeWindow = () => {
        props.setModalActive(false, props.id, props.indexPhotoActive)
    }

    let handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            closeWindow();
        }
    };

    const sortRef = React.useRef();

    React.useEffect(() => {
        document.querySelector('.modal__wrapper').addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <>
            {
                props.modalActive &&

                <div className="modal__wrapper">
                    <div className="modal__window" ref={sortRef}>
                        <div onClick={closeWindow} className="btn__cancel"></div>
                        <img src={props.url} alt={props.title} />
                        <div onClick={prevOne} className="btn__back"></div>
                        <div onClick={nextOne} className="btn__next"></div>
                    </div>

                </div>

            }
        </>
    )
}

export default Modal
