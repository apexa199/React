import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { getUserErrorAction, getUserSuccessAction ,getUserAction} from "./userSlice";


function* getUserSaga( payload) 
    {
  try {
    
    const response= yield axios.get(`https://jsonplaceholder.typicode.com/users`);
   yield put(getUserSuccessAction(response.data));

  } catch (error) {

    yield put(getUserErrorAction(error));
  }
}


export function* watchGetUser() {
  yield takeLatest(getUserAction, getUserSaga);
}
