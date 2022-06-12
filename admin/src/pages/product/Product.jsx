import React from 'react'
import './product.scss'
import Chart from '../../components/chart/Chart'
import { productData } from '../../testData'
import { Link } from 'react-router-dom'
import FileUploadIcon from '@mui/icons-material/FileUpload';


export default function Product() {
    return (
        <div className='product'>
            <div className="product-title-container">
                <h1>Edit Product Information</h1>
                <Link to='/newProduct'>
                    <button className="product-btn">Create</button>
                </Link>
            </div>
            <div className="product-info-container">
                <div className="product-info-chart">
                    <Chart className='product-chart' grid data={productData} dataKey="name" title="Sales Analytics" />
                </div>
                <div className="product-info-details-container">
                    <div className="product-info-top">
                        <img src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" />
                        <div className="product-info-details">
                            <span className="product-name">IPhone 13 Pro</span>
                        </div>
                    </div>
                    <div className="product-info-bottom">
                        <div className="product-info-bottom-details">
                            <span className='product-info-title'>ID :</span>
                            <span className='product-info-values'>177062001</span>
                        </div>
                        <div className="product-info-bottom-details">
                            <span className='product-info-title'>Sales :</span>
                            <span className='product-info-values'>3965</span>
                        </div>
                        <div className="product-info-bottom-details">
                            <span className='product-info-title'>Active :</span>
                            <span className='product-info-values'>Yes</span>
                        </div>
                        <div className="product-info-bottom-details">
                            <span className='product-info-title'>In Stock :</span>
                            <span className='product-info-values'>Yes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-update-container">
                <div className="product-update">
                    <div className="product-update-info">
                        <div className="product-update-info-items">
                            <label>Product Name</label>
                            <input type="text" placeholder='Iphone 13 Pro' />
                        </div>
                        <div className="product-update-info-items">
                            <label>In Stock</label>
                            <select name="stock" id="stock">
                                <option value="none" defaultValue={true}>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="product-update-info-items">
                            <label>Active</label>
                            <select name="active" id="active">
                                <option value="none" defaultValue={true} >Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No" >No</option>
                            </select>
                        </div>
                    </div>
                    <div className="product-update-image">
                        <img src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" />
                        <label htmlFor="file"><FileUploadIcon className="product-img-upload" /></label>
                        <input type="file" id='file' style={{ display: 'none' }} />
                    </div>
                </div>
                <button className="product-update-btn">Update</button>
            </div>
        </div>
    )
}
