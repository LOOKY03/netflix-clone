import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    search: true,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,

    reducers :  {
        setSearchBar: (state, action) => {
            state.search = action.payload
        }
    }
})

export const {setSearchBar} = searchSlice.actions

export const selectSearch = (state) => state.search.search

export default searchSlice.reducer