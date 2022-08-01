import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import user from '../features/user/userSlice.js';
import movie from '../features/movies/movieSlice.js';

// 'nextjs_app\features\user\userSlice.js'

const reducer = combineReducers({user, movie});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})