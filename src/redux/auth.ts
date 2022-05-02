import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user: Record<any, any> | null;
}

const initialState: AuthState = {
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { authenticateUser } = authSlice.actions;

export default authSlice.reducer;
