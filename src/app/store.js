import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import movieReducer from '../features/movieSlice';
import searchReducer from '../features/searchSlice'
import moviesReducer from '../features/searchmovieSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    search: searchReducer,
    movies: moviesReducer,

    
    
    
  },
});
