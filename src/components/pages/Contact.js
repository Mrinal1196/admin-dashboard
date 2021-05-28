import React from 'react';
import Navbar from '../layout/Navbar';
const Contact=()=>{
    return(
        <div>
        <Navbar></Navbar>
        <div className='container'>
            
            <div className='py-4'>
                <h1>Contact Page</h1>
                <p className='lead'>
                    Feel free to contact us at abc@example.com
                </p>
            </div>
        </div>
        </div>
    )
}
export default Contact;