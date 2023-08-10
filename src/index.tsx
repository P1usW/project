import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import ThemeProvider from './providers/theme/ThemeProvider';
import { publicRoutes } from './constant/routes';
import Layout from './components/Layout/Layout';
import './style/index.scss'

let route;
if (process.env.buildMode === 'production') {
  route = createHashRouter;
} else {
  route = createBrowserRouter;
}

const router = route([
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
