import { Profile, PostCount, ProfileDescription, PostCategory, AddPost } from "./DashboardUtility";
import MainDashboardBody from "./MainDashboardBody";

export default function MainBody({ children }) {
  return (
    <>
      <MainDashboardBody>
        <Profile />
        <PostCount />
        <ProfileDescription />
        <PostCategory />
        {children}
        <AddPost />
      </MainDashboardBody>
    </>
  );
}
