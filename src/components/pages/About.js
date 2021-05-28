import React from 'react';
import Navbar from '../layout/Navbar';
const About=()=>{
    return(
        <div>
        <Navbar></Navbar>
        <div className='container'>
            
            <div className='py-4'>
                <h1>About Page</h1>
                <p className='lead'>
                    This is a admin dashboard application where users can be added, edited and deleted.
                </p>
            </div>
        </div>
        </div>
    )
}
export default About;