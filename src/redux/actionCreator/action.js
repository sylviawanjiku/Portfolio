import { SEND_EMAIL, SEND_EMAIL_SUCCESS, SEND_EMAIL_FAILURE } from "./actionTypes";

export const sendEmail = (emailData) => {
    return {
        type: SEND_EMAIL,
        emailData
    }
};
export const sendEmailSuccess = sentMail => {
    return {
        type: SEND_EMAIL_SUCCESS,
        sentMail
    }
};
export const sendEmailFailure = error => {
    return {
        type: SEND_EMAIL_FAILURE,
        error
    }
};
