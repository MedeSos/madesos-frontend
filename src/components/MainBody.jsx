import { useUser } from "../context/user";
import { Profile, PostCount, ProfileDescription, PostCategory, AddPost } from "./DashboardUtility";
import MainDashboardBody from "./MainDashboardBody";
import axios from "axios";

export default function MainBody({ children, setCategory, Category }) {
  const { videos, images, posts } = useUser();
  const blogCount = {
    post:posts.count,
    image:images.count,
    video:videos.count
  };
  return (
    <>
      <MainDashboardBody footer={<AddPost />}>
        <Profile />
        <PostCount count={blogCount}/>
        <ProfileDescription />
        <PostCategory setCategory={setCategory} Category={Category} />
        {children}
      </MainDashboardBody>
    </>
  );
}
