import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { AppProviders } from './providers';
import { App } from './views';
import { ErrorPage } from './views';
import reportWebVitals from './reportWebVitals';
import './styles/main.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppProviders>
        <App />
      </AppProviders>
    ),
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
