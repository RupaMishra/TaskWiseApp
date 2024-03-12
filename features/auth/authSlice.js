import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTokenToLocalStorage } from "../../utils/localStorage.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { customFetch } from "../../utils/axios.js";
const initialState = {
  token: "",
  isAuthenticated: false,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const resp = await customFetch.post("login/", data);
      return resp.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authenticate: (state, { payload }) => {
      const { access } = payload;
      state.token = access;
      state.isAuthenticated = !!access;
      addTokenToLocalStorage(access);
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      AsyncStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {})
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { access } = payload;
        state.token = access;
        state.isAuthenticated = !!access;
        addTokenToLocalStorage(access);
        // console.log("payload", payload);
      })
      .addCase(loginUser.rejected, (state) => {});
  },
});

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;
