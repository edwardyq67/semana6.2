import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkNamethunk } from '../store/slice/favorites.slice';

const Favorites = () => {
    const favorites=useSelector(state=>state.favorites)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(thunkNamethunk())
    },[])
    console.log(favorites)
    return (
        <div>
            Favorites
           
        </div>
    );
};

export default Favorites;