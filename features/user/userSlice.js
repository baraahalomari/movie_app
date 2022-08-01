import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    signupUser: (state, action) => {
      state.user = action.payload;
      console.log(action)
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))

    },
    signinUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
    }
  },
});

// to get the user profile
const { signupUser } = userSlice.actions;

export const signup =  (user,router) => async (dispatch) => {
  try {
    await api.signup(user).then((res) => {
      dispatch(signupUser(res.data));
      router.push("/");
    });
  } catch (error) {
    console.log(error);
  }
};

const { signinUser } = userSlice.actions;
export const signin = (user,router) => async (dispatch) => {
  try {
    await api.login(user).then((res) => {
      dispatch(signinUser(res.data));
      router.push("/");
    });
  } catch (error) {
    console.log(error);
  }
}


export default userSlice.reducer;
