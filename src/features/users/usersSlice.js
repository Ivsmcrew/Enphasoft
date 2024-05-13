import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  viewedUser: {
    "id": null,
    "username": "",
    "first_name": "",
    "last_name": "",
    "password": "",
    "is_active": null
  },
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    addUser: (state, action) => {
      state.users.push(action.payload)
    },
    setViewedUser: (state, action) => {
      state.viewedUser = action.payload
    },
    deleteUserByID: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload)
    },
    updateUserAction: (state, action) => {
      state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user)
    }
  }
})

export const { 
  setUsers, 
  addUser, 
  setViewedUser, 
  deleteUserByID, 
  updateUserAction,
} = usersSlice.actions

export default usersSlice.reducer