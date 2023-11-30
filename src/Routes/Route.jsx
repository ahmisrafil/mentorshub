import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../components/Root/Root";
import Error from "../pages/Error/Error";
import AllClasses from "../pages/AllClasses/AllClasses";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/allClasses',
          element: <AllClasses></AllClasses>
        }
        // {
        //   path: ,
        //   element: 
        // }
        // {
        //   path: ,
        //   element: 
        // }
        // {
        //   path: ,
        //   element: 
        // }
        // {
        //   path: ,
        //   element: 
        // }
      ]
    },
  ]);
  