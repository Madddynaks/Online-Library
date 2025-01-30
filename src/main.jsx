import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Add your global styles (if any)
import { Provider } from 'react-redux';  // Import the Provider for Redux
import store from './store/store';  // Import the Redux store
import App from './App';  // Import the App component

// Render the app inside the root element with Redux provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  {/* Wrap the app with the Redux Provider */}
    <App />  {/* The main component of the app */}
  </Provider>
);
