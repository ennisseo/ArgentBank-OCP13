import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userSlice';
import { userProfileReducer } from './reducers/userProfileSlice';

const rootReducer = combineReducers({
    user: userReducer,
    userProfile: userProfileReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
