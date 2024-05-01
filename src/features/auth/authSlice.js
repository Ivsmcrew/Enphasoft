import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "./authActions";

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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getToken.pending, (state, action) => {
        state.isTokenLoading = true
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.isTokenLoading = false
        state.token = action.payload
      })
      .addCase(getToken.rejected, (state, action) => {
        state.isTokenLoading = false
        state.error = action.payload.error
      })
  }
})

export const { setIsAuth, setToken } = authSlice.actions

export default authSlice.reducer