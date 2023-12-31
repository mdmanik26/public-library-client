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
import Books from "../Components/Books";
import Details from "../Pages/Details";
import Update from "../Pages/Update";
import Read from "../Pages/Read";
import ErrorPage from "../Pages/ErrorPage";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
              path:'/books/:name',
              element: <PrivateRoutes><Books></Books></PrivateRoutes>,
              loader: ({params}) => fetch(`https://public-library-server.vercel.app/books/${params.name}`)
            },
            {
              path:'/book/:id',
              element: <PrivateRoutes><Details></Details></PrivateRoutes>,
              loader: ({params}) => fetch(`https://public-library-server.vercel.app/book/${params.id}`)
            },
            {
              path:'/update/:id',
              element: <PrivateRoutes><Update></Update></PrivateRoutes>,
              loader: ({params}) => fetch(`https://public-library-server.vercel.app/book/${params.id}`)
            },
            {
              path:'/read/:id',
              element: <PrivateRoutes><Read></Read></PrivateRoutes>,
              loader: ({params}) => fetch(`https://public-library-server.vercel.app/book/${params.id}`)
            },
        ]
    }



  ])

  export default router;