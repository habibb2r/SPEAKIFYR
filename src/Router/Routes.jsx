import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Page/Main";
import Home from "../Page/Home/Home";
import Instructors from "../Page/Instructors/Instructors";
import Classes from "../Page/Classes/Classes";
import Error from "../Page/NoPage/Error";
import Login from "../Page/Account/Login";
import SignUp from "../Page/Account/SignUp";
import Dashboard from "../Page/DashBoard/Dashboard";
import MyClasses from "../Page/DashBoard/User/MyClasses";
import UserHome from "../Page/DashBoard/User/UserHome";
import MyEnrolled from "../Page/DashBoard/User/MyEnrolled";
import AdminRoute from "./AdminRoute";
import ManageUser from "../Page/DashBoard/Admin/ManageUser";
import Payment from "../Page/DashBoard/User/Payment/Payment";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [{
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>,
      },
      {
        path: 'classes',
        element:<Classes></Classes>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element:<SignUp></SignUp>
      }
      // {
      //   path:,
      //   element:,
      // },
      // {
      //   path:,
      //   element:,
      // }
    ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
            path: 'myclasses',
            element: <MyClasses></MyClasses>
        },
        {
            path: 'enrol',
            element: <MyEnrolled></MyEnrolled>
        },
        {
            path: 'home',
            element: <UserHome></UserHome>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
            path: 'users',
            element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
        },
      ]
    },
    {
      path: '*',
      element:<Error></Error>
    }
  ]);