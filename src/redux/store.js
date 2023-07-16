import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import userReducer from './features/userSlice';
import shazamCoreapi from './services/shazam_core';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    currentuser:userReducer,
    [shazamCoreapi.reducerPath]:shazamCoreapi.reducer,
  },

  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(shazamCoreapi.middleware)
});
