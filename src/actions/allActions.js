import AllActionTypes from "../Utility/allActionsTypes";

export const signupSuccess = (userData) => async (dispatch) => {
    dispatch({
      type: AllActionTypes.SIGNUP_STATE_SUCCESS,
      payload: userData,
    });
  };


  export const signinSuccess = (token) => async (dispatch) => {
    dispatch({
      type: AllActionTypes.SIGNIN_STATE_SUCCESS,
      payload: token,
    });
  };  

  export const logoutSuccess = (string) => async (dispatch) => {
    dispatch({
      type: AllActionTypes.LOGOUT_SUCCESS,
      payload: string,
    });
  };  