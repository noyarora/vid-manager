import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import VideosReducer from './VideosSlice';

export const store = configureStore({
  reducer: {
    videos: VideosReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
