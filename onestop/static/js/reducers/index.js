import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
} from "../actions/index";

const initialState = {
  profilePicAddress: "",
  profileLoading: false,
  profileLoadingError: null,
  firstName: "",
  lastName: "",
  eMail: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        profileLoading: true,
        profileLoadingError: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        profilePicAddress: action.payload.data.profile_pic,
        firstName: action.payload.data.first_name,
        lastName: action.payload.data.last_name,
        eMail: action.payload.data.email,
        profileLoading: false,
        profileLoadingError: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        profileLoading: false,
        profileLoadingError: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
