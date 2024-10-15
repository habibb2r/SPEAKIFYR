import { createBrowserRouter } from "react-router-dom";
import Main from "../Page/Main";
import Home from "../Page/Home/Home";
import Instructors from "../Page/Instructors/Instructors";
import Classes from "../Page/Classes/Classes";
import Error from "../Page/NoPage/Error";
import Login from "../Page/Account/Login";
import SignUp from "../Page/Account/SignUp";
import Dashboard from "../Page/DashBoard/NavigatingPath/Dashboard";
import MyClasses from "../Page/DashBoard/User/Pages/MyClasses/MyClasses";
import MyEnrolled from "../Page/DashBoard/User/Pages/MyEnrolledClass/MyEnrolled";
import UserHome from "../Page/DashBoard/User/Pages/Home/UserHome";
import Payment from "../Page/DashBoard/User/Pages/Payment/Payment";
import AdminRoute from "./AdminRoute";
import ManageUser from "../Page/DashBoard/Admin/ManageUser/ManageUser";
import PrivateRoute from "./PrivateRoute";
import UserRoute from "./UserRoute";
import AdminHome from "../Page/DashBoard/Admin/Home/AdminHome";
import InstructorRoute from "./InstructorRoute";
import InstrauctorHome from "../Page/DashBoard/Instructor/Home/InstrauctorHome";
import ManageCourse from "../Page/DashBoard/Instructor/CourseManagement/ManageCourse";

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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [

      //student
      {
        path: "student",
        element: <UserRoute><UserHome></UserHome></UserRoute>,
      },
      {
        path: "myclasses",
        element: <UserRoute><MyClasses></MyClasses></UserRoute>,
      },
      {
        path: "enroll",
        element: <UserRoute><MyEnrolled></MyEnrolled></UserRoute>,
      },
      {
        path: "payment",
        element: <UserRoute><Payment></Payment></UserRoute>,
      },

      //admin
      {
        path: 'admin',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "users",
        element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
      },

      //instructor
      {
        path: 'instructor',
        element: <InstructorRoute><InstrauctorHome></InstrauctorHome></InstructorRoute>
      },
      {
        path: 'managecourse',
        element: <InstructorRoute><ManageCourse></ManageCourse></InstructorRoute>
      }
      
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
