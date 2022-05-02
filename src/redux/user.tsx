import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserDetails {
  repo: Record<any, any> | null;
}

const initialState: UserDetails = {
  repo: {},
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveDetails: (state, action: PayloadAction<any>) => {
      state.repo = action.payload;
    },
  },
});

export const { saveDetails } = authSlice.actions;

export default authSlice.reducer;
