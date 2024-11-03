import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
