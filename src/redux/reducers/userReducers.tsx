import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from "../../store";

// Define a type for the slice state
interface UserList {
  userList: [],
  userSaveRes: null,
  userDetailRes: null
}

// Define the initial state using that type
let initialState: UserList = {
  userList: [],
  userSaveRes: null,
  userDetailRes: null
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserList: (state, action) => {
      state.userList = action.payload
    },
    postUserData: (state, action) => {
      state.userSaveRes = action.payload
    },
    userDetail: (state, action) => {
      state.userDetailRes = action.payload
    }
  },
})

export const { postUserData, fetchUserList, userDetail } = userReducer.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.users

export default userReducer.reducer