import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "./../pages/LoginPage";
import RegisterPage from "./../pages/RegisterPage";
import PostType from "./../pages/PostType";
import UpdatePost from "../components/UpdatePost";
import UpdatePostUpload from "./../components/UpdatePostUpload";
import ProfilePages from "../components/ProfilePage";
import ErrorPage from "./../pages/ErrorPage";
import {ProtectedRoute,AuthRoute} from './../components/ProtectedRoute';

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <AuthRoute><LoginPage /></AuthRoute>,
  },
  {
    path: "/register",
    element: <AuthRoute><RegisterPage /></AuthRoute>,
  },
  {
    path: "/update",
    element:<ProtectedRoute><PostType /></ProtectedRoute> ,
  },
  {
    path: "/profile",
    element:<ProtectedRoute><ProfilePages /></ProtectedRoute> ,
  },
  {
    path: "/update/blog",
    element:<ProtectedRoute><UpdatePost /></ProtectedRoute> ,
  },
  {
    path: "/update/image",
    element:<ProtectedRoute><UpdatePostUpload /></ProtectedRoute> ,
  },
]);
