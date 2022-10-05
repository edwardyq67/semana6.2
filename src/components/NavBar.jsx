import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { filterCategory, filterName } from '../store/slice/new.slice';


const NavBar = () => {
  const [category,setCategory]=useState([])
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [name,setName]=useState("");
  const [show, setShow] = useState(false);
  
  
     useEffect(()=>{
      axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
      .then(res=>setCategory(res.data.data.categories))
     },[])
     
     
    
    
    return (
        <div>
        
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
    <a className="navbar-brand" href="/#/">News App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/#/">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#/favorites">Favorites</a>
        </li>
       <li className="nav-item">
          <a className="nav-link" href="/#/login">Login</a>
        </li>
        
        </ul>
        
        <form className="d-flex">
          <input value={name} onChange={e=>setName(e.target.value)}className="form-control me-sm-2" type="text" placeholder="Search"/>
       <button onClick={()=>dispatch(filterName(name))} className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        
      </form>
    
        </div>
        </div>
        
    </nav>
  
    <table className="table table-hover">
      
    <tr>
    {
              category.map(categ=>(
                
                <td onClick={()=>dispatch(filterCategory(categ.id))} key={categ.id}>{categ.name}</td>
              ))
            }
      
      
    </tr>
    
    </table>
            
        </div>
        
    );
};

export default NavBar;