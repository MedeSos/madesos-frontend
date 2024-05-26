import { Profile, PostCount, ProfileDescription, PostCategory, AddPost } from "./DashboardUtility";
import MainDashboardBody from "./MainDashboardBody";

export default function MainBody({ children, setCategory, Category }) {
  return (
    <>
      <MainDashboardBody footer={<AddPost />}>
        <Profile />
        <PostCount />
        <ProfileDescription />
        <PostCategory setCategory={setCategory} Category={Category} />
        {children}
      </MainDashboardBody>
    </>
  );
}
