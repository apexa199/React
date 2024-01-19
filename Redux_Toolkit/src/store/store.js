import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../counter/counterSlice';
import createSagaMiddleware from "@redux-saga/core";
import postsSlice from '../posts/postsSlice';





export default configureStore({
  

   
  reducer: {
    counter: counterSlice,
    post :postsSlice,
    
   },

});

