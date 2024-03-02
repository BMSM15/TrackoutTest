import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { history, fetchWrapper } from "../_helpers";

// create slice

const name = "auth";
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers: createExtraReducers() });

// exports

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    error: null,
  };
}

function createReducers() {
  return {
    logout,
  };

  function logout(state) {
    state.user = null;
    localStorage.removeItem("user");
    history.navigate("/login");
  }
}

function createExtraActions() {
  const baseUrl = "http://localhost:5000/api";

  return {
    login: login()
  };

  function login() {
    return createAsyncThunk(
      `${name}/login`,
      async ({ email, password }) =>
        await fetchWrapper.post(`${baseUrl}/auth/login`, { email, password })
    );
  }
}

function createExtraReducers() {
  return (builder) => {
    builder
      .addCase(extraActions.login.pending, (state) => {
        state.error = null;
      })
      .addCase(extraActions.login.fulfilled, (state, action) => {
        const user = action.payload;

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
        state.user = user;

        // get return url from location state or default to home page
        const { from } = history.location.state || { from: { pathname: "/" } };
        history.navigate(from);
      })
      .addCase(extraActions.login.rejected, (state, action) => {
        state.error = action.error;
      });
  };
}
