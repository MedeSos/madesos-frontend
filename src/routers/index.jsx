import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "./../pages/LoginPage";
import RegisterPage from "./../pages/RegisterPage";
import PostType from "./../pages/PostType";
import UpdatePost from "../components/UpdatePost";
import UpdatePostUpload from "./../components/UpdatePostUpload";
import ProfilePages from "../components/ProfilePage";
import ErrorPage from "./../pages/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/update",
    element: <PostType />,
  },
  {
    path: "/profile",
    element: <ProfilePages />,
  },
  {
    path: "/update/blog",
    element: <UpdatePost />,
  },
  {
    path: "/update/image",
    element: <UpdatePostUpload />,
  },
]);
