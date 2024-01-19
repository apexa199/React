import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../counter/counterSlice';
import createSagaMiddleware from "@redux-saga/core";
import postsSlice from '../posts/postsSlice';
import userSlice from '../user/userSlice';
import rootSaga from './rootSaga';



const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    thunk: false,
    immutableCheck: false,
    serializableCheck: false
  }).concat(sagaMiddleware),
   
  reducer: {
    counter: counterSlice,
    // post :postsSlice,
    user: userSlice
    
   },

});

sagaMiddleware.run(rootSaga)

