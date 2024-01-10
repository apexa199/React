import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
import tutorialReducer from "./tutorialReducer";


const rootReducer= combineReducers({
    counter: counterReducer,
    user: userReducer,
    tutorial : tutorialReducer
})

export default rootReducer;