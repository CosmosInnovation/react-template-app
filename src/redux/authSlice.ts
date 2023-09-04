import { createSlice, createAsyncThunk, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { END_POINTS } from "./uri";
import { request } from "./request";
import { storeToken } from "./token";
import { AxiosResponse } from "axios";
import { AxiosErrorType } from "../interface/errorType";
import { LoginFormData, SignUpFormData } from "../interface/formData";

interface AuthState {
  auth: undefined | object; // define the shape of auth if possible
  error: undefined | string;
  success: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  auth: undefined,
  error: undefined,
  success: false,
  loading: false
};

const result = (response: AxiosResponse) => {
  const { data: responseData } = response.data;
  storeToken(responseData.jwToken);
  return responseData;
}

const getErrorMessage = (error: AxiosErrorType): string =>
  error?.response?.data?.message || 'An error occurred';

const handlePending = (state: AuthState) => {
  state.loading = true;
  state.error = undefined; // or whatever initial state for error is
};

const handleRejected = (
  state: AuthState,
  action: PayloadAction<string | undefined, string, unknown, SerializedError>
) => {
  state.loading = false;
  // Use action.payload or action.error.message depending on your needs
  state.error = action.payload || action.error.message;
};

const handleFulfilled = (state: AuthState, action: PayloadAction<object>) => {
  state.auth = action.payload;
  state.loading = false;
  state.error = undefined;
};

// call to server
export const login = createAsyncThunk<
  AxiosResponse,
  SignUpFormData,
  { rejectValue: string }>
  ('auth/login', async (data: LoginFormData, thunkAPI) => {
  try {
    const response = await request(END_POINTS.LOGIN, 'post', data);
    return result(response);
  } catch (error) {
    const axiosError = error as AxiosErrorType;
    return thunkAPI.rejectWithValue(getErrorMessage(axiosError));
  }
});

export const register = createAsyncThunk<
  AxiosResponse,
  SignUpFormData,
  { rejectValue: string }>
  ('auth/register', async (data: SignUpFormData, thunkAPI) => {
  try {
    const response = await request(END_POINTS.REGISTER, 'post', data);
    return result(response);
  } catch (error) {
    const axiosError = error as AxiosErrorType;
    return thunkAPI.rejectWithValue(getErrorMessage(axiosError));
  }
});

// slice 
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<object>) => {
      state.auth = action.payload;
    },
    logout: (state) => {
      state.auth = undefined;
    },
    resetError: (state) => {
      state.error = undefined;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(login.rejected, handleRejected);
  }
})

export const { setAuth, logout, resetError } = authSlice.actions;
export default authSlice.reducer;