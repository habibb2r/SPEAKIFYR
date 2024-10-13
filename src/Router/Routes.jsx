import { createBrowserRouter } from "react-router-dom";
import Main from "../Page/Main";
import Home from "../Page/Home/Home";
import Instructors from "../Page/Instructors/Instructors";
import Classes from "../Page/Classes/Classes";
import Error from "../Page/NoPage/Error";
import Login from "../Page/Account/Login";
import SignUp from "../Page/Account/SignUp";
import Dashboard from "../Page/DashBoard/Dashboard";
import MyClasses from "../Page/DashBoard/User/Pages/MyClasses/MyClasses";
import MyEnrolled from "../Page/DashBoard/User/Pages/MyEnrolledClass/MyEnrolled";
import UserHome from "../Page/DashBoard/User/Pages/Home/UserHome";
import Payment from "../Page/DashBoard/User/Pages/Payment/Payment";
import AdminRoute from "./AdminRoute";
import ManageUser from "../Page/DashBoard/Admin/ManageUser/ManageUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "enrol",
        element: <MyEnrolled></MyEnrolled>,
      },
      {
        path: "home",
        element: <UserHome></UserHome>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
