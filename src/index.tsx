import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ThemeProvider from './providers/theme/ThemeProvider';
import { publicRoutes } from './constant/routes';
import Layout from './components/Layout/Layout';
import './style/index.scss'

const router = createBrowserRouter([
  {
    Component: Layout,
    children: publicRoutes,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);
