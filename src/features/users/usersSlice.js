import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  filteredAndSortedUsers: [],
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
  }
})

export const { setUsers, addUser, setFilteredAndSortedUsers } = usersSlice.actions

export default usersSlice.reducer