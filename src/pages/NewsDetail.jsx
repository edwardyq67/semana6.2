import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getNewsThunk } from '../store/slice/new.slice';

const NewsDetail = () => {
    const newsProducts=useSelector(state=>state.newsProducts)
    const [product,setProduct]=useState({})
    const [suggestedProduct,setSuggestedProduct]=useState("")
    const navigate=useNavigate()
    const {id}=useParams()
    const dispatch= useDispatch()
    useEffect(()=>{
        const news=newsProducts.find(productsnew=>productsnew.id===Number(id))
        const filterProduct=newsProducts.filter(productsnew=>productsnew.category?.id===Number(news.category?.id) )
        console.log(filterProduct)
        setProduct(news)
        setSuggestedProduct(filterProduct)
    },[newsProducts,id])
    useEffect(()=>{
        dispatch(getNewsThunk())
    },[])
    return (
        <div>
            NewsDetail
            <h1>{product?.category?.name}</h1>
            <img src={product?.productImgs?.[0]} alt="" />
            <div><h3>price: </h3>{product?.price}</div>
            <p>{product?.description}</p>
            
            <ul>
                {
                    suggestedProduct.map?.(prodd=>(
                        <li onClick={()=>navigate(`/news/${prodd.id}`)}>
                            <h1>{prodd?.title}</h1>
                            <img src={prodd.productImgs?.[0]} alt="" />
                            <div><h3>price: </h3>{prodd?.price}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default NewsDetail;