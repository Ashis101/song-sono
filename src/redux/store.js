import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import shazamCoreapi from './services/shazam_core';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    [shazamCoreapi.reducerPath]:shazamCoreapi.reducer,
  },

  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(shazamCoreapi.middleware)
});
