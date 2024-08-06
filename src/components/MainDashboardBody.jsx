import { HeaderChange } from "./DashboardUtility";
import { ContentBody, MainContent, BoxContainer } from "./Frame";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserProvider } from './../context/user';
import generateData from './../dummy/data';

export default function MainDashboardBody({ children, headerStatus = false, footer = null }) {
  const dummyData = generateData(10);
  const [user, setUser] = useState({});
  const [blogPost, setBlogPost] = useState({});
  const [blogImage, setBlogImage] = useState({});
  const [blogVideo, setBlogVideo] = useState({});

  useEffect(() => {
    refreshUser();
    refreshBlog("blog",setBlogPost);
    refreshBlog("image",setBlogImage);
    refreshBlog("video",setBlogVideo);
  }, []);

  async function refreshUser() {
    try {
      const id = localStorage.getItem("id");
      const response = await axios.get(`/v1/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const newuser = await response.data.data;
      setUser(newuser);
    } catch (error) {
      console.log(error);
    }
  }

  async function refreshBlog(blogType,setBlog) {
    try {
      // const response = await axios.get(`/v1/api/${blogType}?type=current`, {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
      // });
      // const newBlog = await response.data.data;
      setBlog(dummyData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <UserProvider user={user} setUser={setUser} posts={blogPost} setPosts={setBlogPost} images={blogImage} setImages={setBlogImage} videos={blogVideo} setVideos={setBlogVideo}>
        <BoxContainer>
          <ContentBody header={<HeaderChange changes={headerStatus} />} main={<MainContent>{children}</MainContent>} footer={footer} />
        </BoxContainer>
      </UserProvider>
    </>
  );
}
