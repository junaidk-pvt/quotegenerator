import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import { Toaster } from 'react-hot-toast';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from 'react-redux';
import { store } from './store';
import Spinner from './Components/Spinner/Spinner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  <Provider store={store}>

    <Suspense fallback=<Spinner />>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </Suspense>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
