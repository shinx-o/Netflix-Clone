import React, { useContext, useState } from 'react'
import './createProduct.scss'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import storage from '../../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { MovieContext } from '../../context/moviesContext/MovieContext'
import { addMovie } from '../../context/moviesContext/apiCalls';

export default function CreateProduct() {
    const [movie, setMovie] = useState({});
    const [progress, setProgress] = useState(-1);
    const [img, setImg] = useState({});
    const [imgTitle, setImgTitle] = useState({});
    const [imgThumbnail, setImgThumbnail] = useState({});
    const [trailer, setTrailer] = useState({});
    const [video, setVideo] = useState({});
    const [uploaded, setUploaded] = useState(0);
    const { dispatch } = useContext(MovieContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        addMovie(movie, dispatch);
        setMovie({})
        setImg({})
        setImgThumbnail({})
        setTrailer({})
        setVideo({})
        setUploaded(0)
        setProgress(-1)
    }

    const handleChange = (e) => {
        const value = e.target.name === 'isSeries' ? JSON.parse(e.target.value) : e.target.value;
        setMovie({ ...movie, [e.target.name]: value })
    }

    const upload = (items) => {
        items.forEach(item => {
            const storageRef = ref(storage, `/items/${item.file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const getProgress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(getProgress);
                },
                (err) => {
                    console.log(err)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(url => {
                        setMovie(prev => {
                            return { ...prev, [item.label]: url }
                        });
                        setUploaded(prev => prev + 1)
                    });
                }
            );
        });
    }

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            { file: img, label: 'image' },
            { file: imgTitle, label: 'imageTitle' },
            { file: imgThumbnail, label: 'imageThumbnail' },
            { file: trailer, label: 'trailer' },
            { file: video, label: 'video' }
        ])
    }

    return (
        <div className='new-product'>
            <div className="movie-title-container">
                <h1>Add Movie</h1>
                <div className="progress" style={progress === -1 || progress === 100 ? {width : '0'} : {width : `${progress}%`}}></div>
                {uploaded === 5 ? <button onClick={handleSubmit}>Add Movie</button> : <button onClick={handleUpload}>Upload</button>}
            </div>
            <div className="create-product-container">
                <div className="product-form">
                    <form id='movie-form'>
                        <div className="left-container">
                            <div className="new-product-item">
                                <label>Title</label>
                                <input type="text" placeholder='Title' name='title' onChange={handleChange} />
                            </div>
                            <div className="new-product-item">
                                <label>Genre</label>
                                <input type="text" placeholder='Genre' name='genre' onChange={handleChange} />
                            </div>
                            <div className="new-product-item">
                                <label>Rating</label>
                                <input type="text" placeholder='Rating' name='rating' onChange={handleChange} />
                            </div>
                            <div className="new-product-item">
                                <label>Year</label>
                                <input type="text" placeholder='Year' name='year' onChange={handleChange} />
                            </div>
                            <div className="new-product-item">
                                <label>Cast</label>
                                <input type="text" placeholder='cast' name='cast' onChange={handleChange} />
                            </div>
                            <div className="new-product-item">
                                <label>Duration</label>
                                <input type="text" placeholder='duration' name='duration' onChange={handleChange} />
                            </div>
                        </div>
                        <div className="right-container">
                            <div className="new-product-item">
                                <label>Description</label>
                                <textarea rows='8' placeholder='Description' form='movie-form' name='desc' onChange={handleChange} />
                            </div>
                            <div className="new-product-item">
                                <label>Is Series?</label>
                                <select name="isSeries" id="isSeries" onChange={handleChange}>
                                    <option value="none" defaultValue={true}>Select</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div className="new-product-item">
                                <label htmlFor='trailer' className='file-uploads'>Upload Trailer<FileUploadIcon className="movie-upload-icon" /></label>
                                <input className='file-upload-input' name='trailer' type="file" id='trailer' style={{ display: 'none' }} onChange={e => setTrailer(e.target.files[0])} />
                            </div>
                            <div className="new-product-item">
                                <label htmlFor='video' className='file-uploads'>Upload Movie<FileUploadIcon className="movie-upload-icon" /></label>
                                <input className='file-upload-input' name='video' type="file" id='video' style={{ display: 'none' }} onChange={e => setVideo(e.target.files[0])} />
                            </div>
                            <div className="new-product-item">
                                <label htmlFor='img' className='file-uploads'>Upload Image<FileUploadIcon className="movie-upload-icon" /></label>
                                <input className='file-upload-input' name='img' type="file" id='img' style={{ display: 'none' }} onChange={e => setImg(e.target.files[0])} />
                            </div>
                            <div className="new-product-item">
                                <label htmlFor='imgTitle' className='file-uploads'>Upload Image Title<FileUploadIcon className="movie-upload-icon" /></label>
                                <input className='file-upload-input' name='imgTitle' type="file" id='imgTitle' style={{ display: 'none' }} onChange={e => setImgTitle(e.target.files[0])} />
                            </div>
                            <div className="new-product-item">
                                <label htmlFor='imgThumbnail' className='file-uploads'>Upload Image Thumbnail<FileUploadIcon className="movie-upload-icon" /></label>
                                <input className='file-upload-input' name='imgThumbnail' type="file" id='imgThumbnail' style={{ display: 'none' }} onChange={e => setImgThumbnail(e.target.files[0])} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
