import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store } from './store';
import Login from './Login';
import "./index.css"
import reportWebVitals from "./reportWebVitals";
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Login />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
