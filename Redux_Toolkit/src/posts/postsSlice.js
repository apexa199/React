import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getPosts = createAsyncThunk(
    
    'posts/getPosts',
    
    async (args, { dispatch, getState }) => {
 
      return fetch(

        `https://jsonplaceholder.typicode.com/posts?userId=${args.userId}`
      ).then(res => res.json());
      
    }
  );
const initialState = {

    list: [],
    status: null
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
        state.list = payload;
      state.status = 'success';
    }) 

    builder.addCase(getPosts.pending, (state, { payload }) => {
        state.status = 'loading';
    }) 

    builder.addCase(getPosts.rejected, (state, { payload }) => {
        state.status = 'failed';
    }) 
}, 

 
});

export const {} = postsSlice.actions

export default postsSlice.reducer