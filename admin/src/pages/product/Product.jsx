import React, { useContext, useState } from 'react'
import './product.scss'
import { Link, useLocation } from 'react-router-dom'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { MovieContext } from '../../context/moviesContext/MovieContext';
import { updateMovie } from '../../context/moviesContext/apiCalls';
import storage from '../../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'



export default function Product() {
    const editingMovie = useLocation().state.movie
    const [movie, setMovie] = useState(null);
    const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [imgThumbnail, setImgThumbnail] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(false);
    const [progress, setProgress] = useState(-1);
    const { dispatch } = useContext(MovieContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(movie)
        updateMovie({ ...movie, _id: editingMovie._id }, dispatch);
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
                    const getProgress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
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
        const res = [
            { file: img, label: 'image' },
            { file: imgTitle, label: 'imageTitle' },
            { file: imgThumbnail, label: 'imageThumbnail' },
            { file: trailer, label: 'trailer' },
            { file: video, label: 'video' }
        ].filter(item => {
            if (item.file) {
                return true
            }
            return false
        })

        upload(res);
    }

    return (
        <div className='product'>
            <div className="product-title-container">
                <h1>Edit Movie Information</h1>
                <Link to='/new-movie'>
                    <button className="product-btn">Create</button>
                </Link>
            </div>
            <div className="product-info-container">
                <div className="product-info-details-container">
                    <div className="product-info-top">
                        <div className="product-info-details">
                            <span className="product-name">{editingMovie.title}</span>
                        </div>
                        <img src={editingMovie.image} alt="" />
                    </div>
                    <div className="product-info-bottom">
                        <div className="product-info-bottom-details">
                            <span className='product-info-title'>ID :</span>
                            <span className='product-info-values'>{editingMovie._id}</span>
                        </div>
                        <div className="product-info-bottom-details">
                            <span className='product-info-title'>Genre :</span>
                            <span className='product-info-values'>{editingMovie.genre}</span>
                        </div>
                        <div className="product-info-bottom-details">
                            <span className='product-info-title'>Year :</span>
                            <span className='product-info-values'>{editingMovie.year}</span>
                        </div>
                        <div className="product-info-bottom-details">
                            <span className='product-info-title'>Rating :</span>
                            <span className='product-info-values'>{editingMovie.rating}</span>
                        </div>
                        <div className="product-info-bottom-details">
                            <span className='product-info-title'>Cast :</span>
                            <span className='product-info-values'>{editingMovie.cast}</span>
                        </div>
                        <div className="product-info-bottom-details">
                            <span className='product-info-title'>Duration :</span>
                            <span className='product-info-values'>{editingMovie.duration}</span>
                        </div>
                        <div className="product-info-bottom-details">
                            <span className='product-info-title'>is Series? :</span>
                            <span className='product-info-values'>{editingMovie.isSeries ? "Yes" : "No"}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-update-container">
                <div className="product-update">
                    <div className="product-update-info">
                        <div className="left-product-items">
                            <div className="product-update-info-items">
                                <label>Title</label>
                                <input type="text" name='title' placeholder='Title' onChange={handleChange} />
                            </div>
                            <div className="product-update-info-items">
                                <label>Genre</label>
                                <input type="text" name='genre' placeholder='Genre' onChange={handleChange} />
                            </div>
                            <div className="product-update-info-items">
                                <label>Rating</label>
                                <input type="text" name='rating' placeholder='Rating' onChange={handleChange} />
                            </div>
                            <div className="product-update-info-items">
                                <label htmlFor="trailer" className="file-uploads">Upload Trailer<FileUploadIcon className='upload-icon' onChange={e => setTrailer(e.target.files[0])} /></label>
                                <input type="file" id='trailer' name='trailer' style={{ display: 'none' }} />
                            </div>
                        </div>
                        <div className="middle-product-items">
                            <div className="product-update-info-items">
                                <label>Description</label>
                                <textarea rows='8' name='desc' placeholder='Description' onChange={handleChange} />
                            </div>
                            <div className="product-update-info-items">
                                <label>Is Series?</label>
                                <select name="isSeries" id="isSeries" onChange={handleChange}>
                                    <option value="none" defaultValue={true} >Select</option>
                                    <option value="true">Yes</option>
                                    <option value="false" >No</option>
                                </select>
                            </div>
                            <div className="product-update-info-items">
                                <label htmlFor="video" className="file-uploads">Upload Video<FileUploadIcon className='upload-icon' onChange={e => setVideo(e.target.files[0])} /></label>
                                <input type="file" id='video' name='video' style={{ display: 'none' }} />
                            </div>
                        </div>
                        <div className="right-product-items">
                            <div className="product-update-info-items">
                                <label>Year</label>
                                <input type="text" name='year' placeholder='Year' onChange={handleChange} />
                            </div>
                            <div className="product-update-info-items">
                                <label>Cast</label>
                                <input type="text" name='cast' placeholder='Year' onChange={handleChange} />
                            </div>
                            <div className="product-update-info-items">
                                <label>Duration</label>
                                <input type="text" name='duration' placeholder='Year' onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="product-update-image-container">
                        <div className="product-update-image">
                            <img src={ img ? URL.createObjectURL(img) : "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"} className='product-image' alt="Not Uploaded Yet" />
                            <label htmlFor="img" className='product-image-label' >Upload Image</label>
                            <input type="file" id='img' name='img' style={{ display: 'none' }} onChange={e => setImg(e.target.files[0])} />
                        </div>
                        <div className="product-update-image">
                            <img src={imgTitle ? URL.createObjectURL(imgTitle) : "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"} className='product-image' alt="Not Uploaded Yet" />
                            <label htmlFor="imgTitle" className='product-image-label' >Upload Image Title</label>
                            <input type="file" id='imgTitle' name='imgTitle' style={{ display: 'none' }} onChange={e => setImgTitle(e.target.files[0])} />
                        </div>
                        <div className="product-update-image">
                            <img src={imgThumbnail ? URL.createObjectURL(imgThumbnail) : "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"} className='product-image' alt="Not Uploaded Yet" />
                            <label htmlFor="imgThumbnail" className='product-image-label'>Upload Image Thumbnail</label>
                            <input type="file" id='imgThumbnail' name='imgThumbnail' style={{ display: 'none' }} onChange={e => setImgThumbnail(e.target.files[0])} />
                        </div>
                    </div>
                </div>
                {!uploaded ?
                    <div className="btn-wrapper">
                        <button className="product-update-btn" onClick={handleUpload} >Upload</button>
                        <span style={progress === -1 || progress === 100 ? { display: 'none' } : { display: 'inline' }}>Uploaded {progress}%</span>
                    </div>
                    :
                    <div className="btn-wrapper">
                        <button className="product-update-btn" onClick={handleSubmit} >Update</button>
                    </div>
                }
            </div>
        </div>
    )
}
