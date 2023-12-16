import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: { username: "" } };
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            state.value = initialState.value;
        }
    },
});

export const userReducer = userSlice.reducer;
export const { login, logout } = userSlice.actions;