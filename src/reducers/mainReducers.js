import AllActionTypes from "../Utility/allActionsTypes";

const mainReducers = (
state = {
    userData: {},
    token: "",
  },
  action
) => {
    switch (action.type) {
        case AllActionTypes.SIGNUP_STATE_SUCCESS:
            return {
                ...state,
                userData: action.payload
            }
        case AllActionTypes.SIGNIN_STATE_SUCCESS:
            return {
                ...state,
                token: action.payload
            }
        case AllActionTypes.LOGOUT_SUCCESS:
                return {
                    ...state,
                    userData:{},
                    token:""
                }
        default:
            return state;
    }
};
export default mainReducers;