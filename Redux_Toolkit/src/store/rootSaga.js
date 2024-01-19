import { all, fork } from "redux-saga/effects";
import { watchGetUser } from "../user/userSaga";


const rootSaga = function* () {
  yield all([
    watchGetUser(),
    
  ]);
};

export default rootSaga;