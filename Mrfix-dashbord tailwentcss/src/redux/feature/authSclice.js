import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleUserLogin: (state, action) => {
            state.login = !state.login;
        }
    }
});

export const { toggleUserLogin } = authSlice.actions;

export default authSlice.reducer;
