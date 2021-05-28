import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Moment from 'moment';
import Navbar from '../layout/Navbar';

const Dashboard=()=>{
    const [users,setUser]=useState([]);
    
    useEffect(()=>{
        loadUsers();
    },[]);
    
    
    const loadUsers=async()=>{
        const res=await axios.get('http://localhost:3003/users');
        setUser(res.data);
    };
    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    /*const sortUsers=(val)=>{
        users.map(usr=>
            )
        
    }*/
    return(
        <div>
        <Navbar/>
        <div className='container'>
            
            <div className='py-4'>
                <h1>Dashboard</h1>
                <div>
                    <h6>Sort By:</h6>
                    <select >
                        <option value=''>--SELECT--</option>
                        <option value='name'>Name</option>
                        <option value='dateOfCreation'>Date of creation</option>
                    </select><br/><br/>
                <div>
                <Link className='btn btn-primary' to='/users/add'>Add User</Link>
                </div>
                </div>
                <table class='table border shadow'>
                    <thead class='thead-dark'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Company</th>
                            <th scope='col'>Date of creation</th>
                            <th scope='col'>Gender</th>
                            <th scope='col'>DOB</th>
                            <th> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index)=>(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.company}</td>
                                <td>{Moment(user.dateOfCreation).format('DD-MMMM-YYYY')}</td>
                                <td>{user.gender}</td>
                                <td>{Moment(user.DOB).format('DD-MMMM-YYYY')}</td>
                                <td>
                                    <Link class='btn btn-primary mr-2' to={`/users/${user.id}`}>
                                        View
                                    </Link>
                                    <Link class='btn btn-outline-primary mr-2' to={`/users/edit/${user.id}`}>
                                        Edit
                                    </Link>
                                    <Link class='btn btn-danger' onClick={()=>deleteUser(user.id)}>
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}
export default Dashboard;