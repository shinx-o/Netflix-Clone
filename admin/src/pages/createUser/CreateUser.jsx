import React from 'react'
import './createUser.scss';

export default function CreateUser() {
    return (
        <div className='create-user'>
            <h1>New User</h1>
            <form >
                <div className="new-user-item">
                    <label>Username</label>
                    <input type="text" placeholder='peterXparker' />
                </div>
                <div className="new-user-item">
                    <label>Full Name</label>
                    <input type="text" placeholder='Peter Parker' />
                </div>
                <div className="new-user-item">
                    <label>Email</label>
                    <input type="text" placeholder='peter@email.com' />
                </div>
                <div className="new-user-item">
                    <label>Password</label>
                    <input type="password" placeholder='password' />
                </div>
                <div className="new-user-item">
                    <label>Phone</label>
                    <input type="text" placeholder='Peter Parker' />
                </div>
                <div className="new-user-item">
                    <label>Address</label>
                    <input type="text" placeholder='Peter Parker' />
                </div>
                <div className="new-user-item">
                    <label>Gender</label>
                    <div className="new-user-gender">
                        <span>
                            <input type="radio" name='gender' id='male' value='male' />
                            <label htmlFor="male">Male</label>
                        </span>
                        <span>
                            <input type="radio" name='gender' id='female' value='female' />
                            <label htmlFor="female">Female</label>
                        </span>
                        <span>
                            <input type="radio" name='gender' id='other' value='other' />
                            <label htmlFor="other">Other</label>
                        </span>
                    </div>
                </div>
                <div className="new-user-item">
                    <label>Active</label>
                    <select name="active" id="active" >
                        <option value="none" defaultValue={true}>Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <button>Create</button>
        </div>
    )
}
