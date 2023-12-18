import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userProfile: {
        firstName: '',
        lastName: '',
    },
};

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.userProfile = action.payload;
        },
        clearProfile: (state) => {
            state.userProfile = {
                firstName: '',
                lastName: '',
            };
        },
        updateUserName: (state, action) => {
            const { firstName, lastName } = action.payload;
            state.userProfile.firstName = firstName;
            state.userProfile.lastName = lastName;
        },
    },
});

export const { setProfile, clearProfile, updateUserName } = userProfileSlice.actions;
export const userProfileReducer = userProfileSlice.reducer;
