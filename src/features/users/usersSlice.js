import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  filteredAndSortedUsers: [],
  viewedUser: null
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
    setFilteredAndSortedUsers: (state, action) => {
      state.filteredAndSortedUsers = action.payload
    },
    setViewedUser: (state, action) => {
      state.viewedUser = action.payload
    }
  }
})

export const { setUsers, addUser, setFilteredAndSortedUsers, setViewedUser } = usersSlice.actions

export default usersSlice.reducer