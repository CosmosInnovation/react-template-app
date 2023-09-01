import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface NavData {
  name?: string;
  title?: string;
  description?: string;
}
export interface NavState {
  nav: NavData;
  error: null;
  loading: boolean;
}

// Replace 'any' with the type of your auth payload
type AuthPayload = NavData;

const initialState: NavState = {
  nav: {},
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setNav: (state: NavState, action: PayloadAction<AuthPayload>) => {
      state.nav = action.payload;
    }
  }
});

export const { setNav } = authSlice.actions;
export default authSlice.reducer;
