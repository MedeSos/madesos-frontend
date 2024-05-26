import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "./../pages/LoginPage";
import RegisterPage from "./../pages/RegisterPage";
import PostType from "./../pages/PostType";
import UpdatePage from "./../pages/UpdatePage";
import UpdatePost from "../components/UpdatePost";
import UpdatePostUpload from "./../components/UpdatePostUpload";
import SingleBlog from "./../components/SingleBlog";
import SingleVideo from "./../components/SingleVideo";
import SingleImage from "./../components/SingleImage";
import UpdateProfile from "./../components/UpdateProfile";
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
    path: "/update/blog",
    element: <UpdatePost />,
  },
  {
    path: "/update/image",
    element: <UpdatePostUpload />,
  },
  {
    path: "/update/profile",
    element: <UpdateProfile />,
  },
  {
    path: "/blog/image",
    element: <SingleImage />,
  },
  {
    path: "/blog/video",
    element: <SingleVideo />,
  },
  {
    path: "/blog/post",
    element: <SingleBlog />,
  },
]);
