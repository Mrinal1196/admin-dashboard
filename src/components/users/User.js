import React,{useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import axios from 'axios';
import Moment from 'moment';
import Navbar from '../layout/Navbar';

const User=()=>{
    const[user,setUser]=useState({
        name:'',
        company:'',
        dateOfCreation:'',
        gender:'',
        DOB:''
    })
    const{id}=useParams();
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser=async()=>{
        const res=await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
        
    }
    console.log(user);
    return(
        <div>
            <Navbar/>
        
        <div className='container py-4'>
            
            
            <h1 className='display-4'>User Id:{id} </h1>
            <hr/>
            <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Company: {user.company}</li>
        <li className="list-group-item">Date Of Creation: {Moment(user.dateOfCreation).format('DD-MMMM-YYYY')}</li>
        <li className="list-group-item">Gender: {user.gender}</li>
        <li className="list-group-item">DOB: {Moment(user.DOB).format('DD-MMMM-YYYY')}</li>
      </ul><br/><br/>
      <div>
      <Link className='btn btn-primary' to='/dashboard'>
                Back to Dashboard
            </Link>
            </div>
        </div>
        </div>
    )

}
export default User