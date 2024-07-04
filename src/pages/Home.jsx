import MainBody from "../components/MainBody";
import { BlogPosts, BlogVideos } from "../components/Blogs";
import { useState } from "react";
export default function Home() {
  const [PostCategory, setPostCategory] = useState("blog");

  return (
    <>
      <MainBody setCategory={setPostCategory} Category={PostCategory}>
        {PostCategory === "image" && <h1>I dont know how to design this layout</h1>}
        {PostCategory === "video" && <BlogVideos />}
        {PostCategory === "blog" && <BlogPosts />}
      </MainBody>
    </>
  );
  
}
