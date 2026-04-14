import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root';
import Home from './pages/home/Home';
import Timeline from './pages/timeline/Timeline';
import Status from './pages/status/Status';
import ErrorPage from './pages/error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element:<Home></Home> },
      { path: "/timeline", element:<Timeline></Timeline> },
      { path: "/status", element: <Status></Status> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
