import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Navbar from '../layout/Navbar';

const AddUser=()=>{
    let hist=useHistory();
    const[user,setUser]=useState({
        name:'',
        company:'',
        dateOfCreation:'',
        gender:'',
        DOB:''
    });
    const{name,company,dateOfCreation,gender,DOB}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:[e.target.value]});
    };
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post('http://localhost:3003/users',user);
        hist.push('/');
    };
    return(
      <div>
      <Navbar/>
        <div className='container'>
          
            <div className='w-75 mx-auto shadow p-5'>
            <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Company"
              name="company"
              value={company}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Date of Creation"
              name="dateOfCreation"
              value={dateOfCreation}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Gender"
              name="gender"
              value={gender}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your DOB"
              name="DOB"
              value={DOB}
              onChange={e => onInputChange(e)}
            />
            </div>
            <button className="btn btn-primary btn-block" align='center'>Add User</button>
            </form>
        </div>
        </div>
        </div>
    )
}
export default AddUser;