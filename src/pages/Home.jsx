import MainBody from "../components/MainBody";
import { BlogPosts, BlogVideos } from "../components/Blogs";
import { useState } from "react";
export default function Home() {
  const [PostCategory, setPostCategory] = useState("video");

  if (PostCategory === "image") {
    return (
      <>
        <MainBody setCategory={setPostCategory} Category={PostCategory}>
          <h1>I dont know how to design this layout</h1>
        </MainBody>
      </>
    );
  } else if (PostCategory === "video") {
    return (
      <>
        <MainBody setCategory={setPostCategory} Category={PostCategory}>
          <BlogVideos />
        </MainBody>
      </>
    );
  } else if (PostCategory === "blog") {
    return (
      <>
        <MainBody setCategory={setPostCategory} Category={PostCategory}>
          <BlogPosts />
        </MainBody>
      </>
    );
  }

  // return (
  //   <>
  //     <MainBody>
  //       {PostCategory === "image" && <BlogPosts />}
  //       {/* <BlogPosts /> */}
  //       <BlogVideos />
  //     </MainBody>
  //   </>
  // );
}
