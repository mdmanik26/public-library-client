import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import AddBooks from "../Pages/AddBooks";

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
              element: <AddBooks></AddBooks>
            }
        ]
    }



  ])

  export default router;