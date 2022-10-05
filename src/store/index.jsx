import { configureStore } from '@reduxjs/toolkit'
import favoritesSlice from './slice/favorites.slice'
import isLoadingSlice from './slice/isLoading.slice'
import newSlice from './slice/new.slice'

export default configureStore({
    reducer: {
        isLoading:isLoadingSlice,
        newsProducts:newSlice,
        favorites:favoritesSlice
    }
})
