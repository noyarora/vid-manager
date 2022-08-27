import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import VideosReducer from '../VideosSlice';

function render(
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({
      reducer: { videos: VideosReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {} as any
) {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
