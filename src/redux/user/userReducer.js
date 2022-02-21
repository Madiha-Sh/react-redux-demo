import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes";

const initialState = {
  isLoading: false,
  users: [],
  error: '',
}

const UserReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST :
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_USERS_SUCCESS :
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      }
    case FETCH_USERS_FAILURE :
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default UserReducer;