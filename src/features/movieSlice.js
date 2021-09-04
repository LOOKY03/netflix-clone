import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    movie: [],
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,

    reducers :  {
        setMovie: (state, action) => {
            state.movie = action.payload
        }
    }
})

export const {setMovie} = movieSlice.actions

export const selectMovie = (state) => state.movie.movie

export default movieSlice.reducer