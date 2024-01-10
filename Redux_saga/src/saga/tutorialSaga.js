import { call, put, takeEvery, takeLatest } from "redux-saga/effects";



function* handleGetTutorial() {
    try {
   
      const tutorial = yield call("https://itchy-plum-caridea.cyclic.app/api/tutorials");  
        console.log(tutorial)

      yield put({ type: "GET_TUTORIAL_SUCCESS", payload: tutorial });
    
    } catch (err) {

      yield put({ type: "GET_TUTORIAL_FAILED", payload: err });
    }
  }

export default function* watcherTutorialSaga() {

    yield takeLatest("GET_TUTORIAL_REQUESTED", handleGetTutorial);
  }
