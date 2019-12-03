import { put, takeLatest } from "redux-saga/effects";
import { SEND_EMAIL } from "../actionCreator/actionTypes";
import { sendEmailSuccess, sendEmailFailure } from "../actionCreator/action"


// worker Saga: will be fired on REQUEST_SEND_GREETINGS actions
export function* sendEmailSagaAsync(action) {
  try {
    yield put(sendEmailSuccess(action.data));
    console.log(action.data.message);
  } catch (error) {
    yield put(sendEmailFailure(action.error));
    console.log(action.error);
  }
}

export default function* watchSendEmailAsync() {
  yield takeLatest(SEND_EMAIL, sendEmailSagaAsync);
}
