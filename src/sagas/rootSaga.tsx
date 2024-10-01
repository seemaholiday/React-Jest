import { all, call } from "redux-saga/effects";
import userListSaga from './userSaga';
function* rootSaga(){
    yield all([
       call(userListSaga)
    ])
}
export default rootSaga