import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import AddBooks from "../Pages/AddBooks";
import Borrowed from "../Pages/Borrowed";
import AllBooks from "../Pages/AllBooks";
import PrivateRoutes from "./PrivateRoutes";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
              path:'/signup',
              element: <SignUp></SignUp>
            },
            {
              path:'/login',
              element: <Login></Login>
            },
            {
              path:'/addbook',
              element: <PrivateRoutes><AddBooks></AddBooks></PrivateRoutes>
            },
            {
              path:'/borrowed',
              element: <PrivateRoutes><Borrowed></Borrowed></PrivateRoutes>
            },
            {
              path:'/allBooks',
              element: <PrivateRoutes><AllBooks></AllBooks></PrivateRoutes>
            }
        ]
    }



  ])

  export default router;