import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {   filterName, getNewsThunk } from '../store/slice/new.slice';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
const Home = () => {
    const dispatch=useDispatch()
    
    const navigate=useNavigate();
    const newsProducts=useSelector(state=>state.newsProducts)
    useEffect(()=>{
        dispatch(getNewsThunk())
    },[])
    
    return (
        <div>
            Home
            
         
            
            
            <Row  md={3}  className="g-4">
      {newsProducts.map(newsItem => (
        <Col key={newsItem.id}onClick={()=>navigate(`/news/${newsItem.id}`)}>
          <Card>
            <Card.Img  variant="top" src={newsItem.productImgs[0]}/>
            <Card.Body>
              <Card.Title ><h4><b>{newsItem.title}</b></h4></Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </div>
        
    );
};

export default Home;