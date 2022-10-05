import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const newSlice = createSlice({
    name: 'newsProducts',
    initialState: [],
    reducers: {
        setNews:(state,action)=>{
            const news=action.payload
            return news
        }
    }
})
export const getNewsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then(res => dispatch(setNews(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const filterName = (name) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${name}`)
        .then(res => dispatch(setNews(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const filterCategory = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`)
        .then(res => dispatch(setNews(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setNews } = newSlice.actions;

export default newSlice.reducer;
