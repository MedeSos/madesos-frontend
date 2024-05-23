import MainBody from "../components/MainBody";
import { BlogPosts, BlogVideos } from "../components/Blogs";
export default function Home() {
  return (
    <>
      <MainBody>
        {/* <BlogPosts /> */}
        <BlogVideos />
      </MainBody>
    </>
  );
}
