//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
  getDashInfo
} from "../../../helpers/fakebackend_helper";

import { loginSuccess, logoutUserSuccess, apiError, reset_login_flag } from './reducer';

export const loginUser = (user, history) => async (dispatch) => {
  try {
    let response;
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      let fireBaseBackend = getFirebaseBackend();
      response = fireBaseBackend.loginUser(
        user.email,
        user.password
      );
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      response = await postJwtLogin({
        email: user.email,
        password: user.password,
        role: user.role
      });
    } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      response = postFakeLogin({
        email: user.email,
        password: user.password,
      });
    }

    if (response) {
      let data = await response;

      localStorage.setItem("authUser", JSON.stringify({
        token: data.token,
        id: data.id,
        role: data.role
      }));

      localStorage.setItem("hotel_id", data.hotel_id)

      if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
        var finallogin = JSON.stringify({ token: data.token, role: data.role });
        finallogin = JSON.parse(finallogin)
        data = finallogin.data;
        if (finallogin.status === "success") {
          dispatch(loginSuccess(data));
          if (data.role === 'vendor') {
            history('/vendor/dashboard-home')
          } else if (data.role === 'admin') {
            history('/admin/dashboard-home')
          }
        } else {
          dispatch(apiError(finallogin));
        }
      } else {
        dispatch(loginSuccess(data));
        if (data.role === 'vendor') {
          history('/vendor/dashboard-home')
        } else if (data.role === 'admin') {
          history('/admin/dashboard-home')
        }
      }
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};


export const logoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("authUser");
    localStorage.removeItem("hotel_id");
    let fireBaseBackend = getFirebaseBackend();
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = fireBaseBackend.logout;
      dispatch(logoutUserSuccess(response));
    } else {
      dispatch(logoutUserSuccess(true));
    }

  } catch (error) {
    dispatch(apiError(error));
  }
};

export const socialLogin = (type, history) => async (dispatch) => {
  try {
    let response;

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      response = fireBaseBackend.socialLoginUser(type);
    }
    //  else {
      //   response = postSocialLogin(data);
      // }
      
      const socialdata = await response;
    if (socialdata) {
      
      console.log(response, '4444444444');
      localStorage.setItem("authUser", JSON.stringify(response));
      dispatch(loginSuccess(response));
      history('/dashboard')
    }

  } catch (error) {
    dispatch(apiError(error));
  }
};

export const resetLoginFlag = () => async (dispatch) => {
  try {
    const response = dispatch(reset_login_flag());
    return response;
  } catch (error) {
    dispatch(apiError(error));
  }
};