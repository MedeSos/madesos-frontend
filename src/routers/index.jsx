import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "./../pages/LoginPage";
import RegisterPage from "./../pages/RegisterPage";
import PostType from "./../pages/PostType";
import UpdatePost from "../components/UpdatePost";
import UpdatePostUpload from "./../components/UpdatePostUpload";
import SingleBlog from "./../components/SingleBlog";
import SingleVideo from "./../components/SingleVideo";
import SingleImage from "./../components/SingleImage";
import ErrorPage from "./../pages/ErrorPage";
import ProfilePages from "../components/ProfilePage";

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
    path: "/profile",
    element: <ProfilePages />,
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
