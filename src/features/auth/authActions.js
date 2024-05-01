import { createAsyncThunk } from "@reduxjs/toolkit";
import EmphasoftAPI from "../../API/emphasoft";

export const getToken = createAsyncThunk(
  "auth/getToken",
  async (user, thunkAPI) => {
    try {
      let token = await EmphasoftAPI.login(user)
      return token
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)