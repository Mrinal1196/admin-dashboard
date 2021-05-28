import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';
import Navbar from '../layout/Navbar';

const EditUser=()=>{
    let hist=useHistory();
    const {id}=useParams();
    const[user,setUser]=useState({
        name:'',
        company:'',
        dateOfCreation:'',
        gender:'',
        DOB:''
    })
    const{name,company,dateOfCreation,gender,DOB}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:[e.target.value]})
    };
    useEffect(()=>{
        loadUser();
    },[]);
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`,user);
        hist.push('/');
    };
    const loadUser=async()=>{
        const res=await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }
    return(
        <div className="container">
          <Navbar/>
          
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
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
              placeholder="Enter Date of creation"
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
          <button className="btn btn-success btn-block">Edit User</button>
        </form>
      </div>
    </div>
    )
}
export default EditUser;