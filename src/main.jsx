import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login/Login';
import SignUp from './components/Authentication/SignUp/SignUp';
import AuthProvider from './components/Provider/AuthProvider';
import PussyService from './components/Layout/PussyService';
import BathService from './components/Layout/BathService';
import Trainers from './components/Layout/Trainers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/pussyService',
        element: <PussyService></PussyService>
      },
      {
        path: '/bathService',
        element: <BathService></BathService>
      },
      {
        path: '/trainers',
        element: <Trainers></Trainers>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
