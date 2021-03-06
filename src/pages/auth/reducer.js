import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setCurrentUser } from 'core/currentUser';
import { setToken, setRefreshToken, setAccessToken } from 'core/token';
import {
  login,
  forgotPassword,
  verifyForgotPasswordCode,
  resetPassword,
} from 'api/auth';

export const loginAuth = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await login({ email, password });
      setToken(response.data.accessToken);
      setCurrentUser(response.data.user);
      const { accessToken, refreshToken } = response.data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const forgotPass = createAsyncThunk(
  'auth/forgotPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await forgotPassword({ email });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const verifyCode = createAsyncThunk(
  'auth/verifyForgotPasswordCode',
  async ({ email, resetPasswordCode }, { rejectWithValue }) => {
    try {
      const response = await verifyForgotPasswordCode({
        email,
        resetPasswordCode,
      });
      return response.data.resetPasswordToken;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const resetNewPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ newPassword, resetPasswordToken }, { rejectWithValue }) => {
    try {
      const response = await resetPassword({
        newPassword,
        resetPasswordToken,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    isSendVerifyCode: false,
    resetPasswordToken: null,
  },
  reducers: {},
  extraReducers: {
    [loginAuth.pending]: state => {
      state.loading = true;
    },
    [loginAuth.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    },
    [loginAuth.rejected]: state => {
      state.loading = false;
    },

    [forgotPass.pending]: state => {
      state.isSendVerifyCode = true;
    },
    [forgotPass.fulfilled]: state => {
      state.isSendVerifyCode = false;
    },
    [forgotPass.rejected]: state => {
      state.isSendVerifyCode = false;
    },

    [verifyCode.pending]: state => {
      state.loading = true;
    },
    [verifyCode.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.resetPasswordToken = payload;
    },
    [verifyCode.rejected]: state => {
      state.loading = false;
    },
    [resetNewPassword.pending]: state => {
      state.loading = true;
    },
    [resetNewPassword.fulfilled]: state => {
      state.loading = false;
    },
    [resetNewPassword.rejected]: state => {
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
