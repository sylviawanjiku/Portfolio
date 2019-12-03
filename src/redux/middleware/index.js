import {all} from 'redux-saga/effects';
import{watchSendEmailAsync} from "./emailSagas";

function* rootSaga(){
    yield all([
        watchSendEmailAsync() 
    ])
}

export default rootSaga;