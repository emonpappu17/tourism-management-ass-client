import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from './Pages/HomePage/Home.jsx';
import AllSpot from './Pages/AllSpot/AllSpot.jsx';
import AddSpot from './Pages/AddSpot/AddSpot.jsx';
import MyList from './Pages/MyList/MyList.jsx';
import Register from './Pages/Register/Register.jsx';
import MyProvider from './MyProvider.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Login from './Pages/Login/Login.jsx';
import Details from './Pages/Details.jsx';
import CountrySpots from './Pages/CountrySpot/CountrySpots.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allSpot',
        loader: () => fetch('https://tourism-management-ass-server.vercel.app/spots'),
        element: <AllSpot></AllSpot>
      },
      {
        path: '/addSpot',
        element: <PrivateRoute> <AddSpot></AddSpot></PrivateRoute>
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        loader: ({ params }) => fetch(`https://tourism-management-ass-server.vercel.app/spots/id/${params.id}`),
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path: '/countrySpots/:id',
        loader: ({ params }) => fetch(`https://tourism-management-ass-server.vercel.app/spots/${params.id}`),
        element: <CountrySpots></CountrySpots>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider> <RouterProvider router={router} /></MyProvider>
  </StrictMode>,
)
