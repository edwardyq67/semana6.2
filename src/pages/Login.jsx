import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {register,handleSubmit,reset}=useForm();
    const navigate=useNavigate();
    localStorage.setItem("name","edward")//f12 /aplicaciones /almacenamiento Local 

    const submit=(data)=>{
        
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login',data)
        .then(res=>{
            navigate("/")
            console.log(res.data.data.token)
            localStorage.setItem("name",res.data.data.token)//f12 /aplicaciones /almacenamiento Local 
           } )
        .catch(error=>{
            if(error.response.status===401){
                alert("te confundiste")
            }
            console.log(error.response)
        })
        
    }
    return (
        <div>
            Login
            <Form onSubmit={handleSubmit(submit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  {...register("email")}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password")}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Login;