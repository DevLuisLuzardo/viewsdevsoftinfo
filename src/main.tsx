import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Bienvenidos from './components/Bienvenidos.tsx';
import InicioSesion from './components/iniciosesion.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/bienvenidos',
    element: <Bienvenidos />,
  },
  {
    path: '/iniciosesion',
    element: <InicioSesion />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
