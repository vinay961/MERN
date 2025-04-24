import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    token: localStorage.getItem("token") || null,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{}
})

// export const { } = authSlice.actions
export default authSlice.reducer