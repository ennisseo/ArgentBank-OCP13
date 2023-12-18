import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        username: '',
        token: '',
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const { username, body } = action.payload;

            if (body && body.token) {
                state.value.username = username;
                state.value.token = body.token;

                // Store credentials in localStorage
                localStorage.setItem('username', username);
                localStorage.setItem('token', body.token);
            } else {
                console.error('Token not found in the login payload:', action.payload);
            }
        },
        logout: (state) => {
            state.value.username = '';
            state.value.token = '';

            // Clear credentials from localStorage
            localStorage.removeItem('username');
            localStorage.removeItem('token');
        },
    },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;