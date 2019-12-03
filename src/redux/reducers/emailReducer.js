import {
  SEND_EMAIL,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE
} from "../actionCreator/actionTypes";

const initialState = {
  isLoading: false,
  mail: [],
  message: '',
  error: {}
}

const emails = (state = initialState, action) => {
  switch (action.type) {
    case SEND_EMAIL:
      return { ...state, isLoading: true };
    
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        message: action.message,
        mail: action.mail
      };
    
      case SEND_EMAIL_FAILURE:
        return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
};

export default emails;