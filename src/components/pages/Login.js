import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import './Login.css'


const Login=()=>{
    const[username,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const hist=useHistory()

    

    return(
        
        <div className='container1' align='center'>
            <h1 >Admin Login</h1><br></br>
            <form class='form-horizontal'>
                <div className='form-group'>
                <label> Username *: </label>
                <input type='text' value={username} name='username' placeholder='Enter username here..' required onChange={(e)=>setUserName(e.target.value)}></input>
                <br/><br/>
                <label> Password*: </label>
                <input type='password' value={password}name='password' placeholder='Enter password here..' required onChange={(e)=>setPassword(e.target.value)}></input>
                <br/><br/>
                <button formaction='/dashboard' className='btn btn-primary'>Login</button>
                </div>
                <br/><br/>
                <p id='texture'>*- Indicates a required field</p>
            </form>
        </div>
        
    )
}
export default Login;