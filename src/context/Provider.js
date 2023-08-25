/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import initialState from './store';

const userProvider = ({ children }) => {
    const store = configureStore({
        reducer: reducers,
        preloadedState: initialState,
      });
          return <Provider store={store}>
        {children}
    </Provider>;
};

export default userProvider;
