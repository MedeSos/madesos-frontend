import MainBody from "../components/MainBody";
import { BlogPosts, BlogVideos, BlogImages } from "../components/Blogs";
import { useState } from "react";
export default function Home() {
  const [PostCategory, setPostCategory] = useState("blog");

  return (
    <>
      <MainBody setCategory={setPostCategory} Category={PostCategory}>
        {PostCategory === "image" && <BlogImages />}
        {PostCategory === "video" && <BlogVideos />}
        {PostCategory === "blog" && <BlogPosts />}
      </MainBody>
    </>
  );
}
