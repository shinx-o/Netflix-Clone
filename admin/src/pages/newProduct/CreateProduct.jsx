import React from 'react'
import './createProduct.scss'
import FileUploadIcon from '@mui/icons-material/FileUpload';


export default function CreateProduct() {
    return (
        <div className='new-product'>
            <h1>New Product</h1>
            <div className="create-product-container">
                <div className="product-form">
                    <form >
                        <div className="new-product-item">
                            <label>Product Name</label>
                            <input type="text" placeholder='IPhone 13 Pro' />
                        </div>
                        <div className="new-product-item">
                            <label>Stock</label>
                            <input type="text" placeholder='124' />
                        </div>
                        <div className="new-product-item">
                            <label>Active</label>
                            <select name="active" id="active" >
                                <option value="none" defaultValue={true}>Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className="product-image-upload">
                    <img src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" />
                    <label htmlFor="file"><FileUploadIcon className="product-img-icon" /></label>
                    <input type="file" id='file' style={{ display: 'none' }} />
                </div>
            </div>
            <button>Create</button>
        </div>
    )
}
