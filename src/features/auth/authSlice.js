import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isTokenLoading: false,
  error: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    }
  }
})

export const { setIsAuth, setToken } = authSlice.actions

export default authSlice.reducer