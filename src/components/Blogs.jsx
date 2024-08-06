import { useState } from "react";
import { Link } from "react-router-dom";
import ComponentPopup from "./ComponentPopup";
import SingleBlog from "./SingleBlog";
import SingleVideo from "./SingleVideo";
import SingleImage from "./SingleImage";
import { useUser } from "../context/user";

export function BlogPosts() {
  const [visibility, setVisibility] = useState(false);
  const {posts} = useUser();

  function ClosePopup(e) {
    setVisibility(e);
  }
  return (
    <>
      {/* <!-- post list  --> */}
      <ComponentPopup onClose={ClosePopup} show={visibility}>
        <SingleBlog />
      </ComponentPopup>
      <div className="post-list flex flex-wrap gap-3 h-96  justify-between overflow-y-auto relative">
        {posts.blogs && posts.blogs.length > 0 ? (
          posts.blogs.map((data, index) => (
            <div key={index} onClick={() => setVisibility(!visibility)} className={`rounded-xl h-32 basis-[48%] bg-secondary bg-[url(${data.image})] bg-cover bg-center cursor-pointer group relative overflow-hidden`}>
              <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
            </div>
          ))
        ) : (
          <p>You don&apos;t have any posts</p>
        )}
      </div>
      {/* <!-- post list end --> */}
    </>
  );
}

export function BlogVideos() {
  const [visibility, setVisibility] = useState(false);
  const {videos} = useUser();

  function ClosePopup(e) {
    setVisibility(e);
  }
  return (
    <>
      {/* <!-- post list  --> */}
      <ComponentPopup onClose={ClosePopup} show={visibility}>
        <SingleVideo />
      </ComponentPopup>
      <div className="post-list flex flex-wrap gap-3 h-96 overflow-hidden overflow-y-auto">
        {videos.blogs && videos.blogs.length > 0 ? (
          videos.blogs.map((data, index) => (
            <div key={index} onClick={() => setVisibility(!visibility)} className={`rounded-xl h-32 w-full bg-secondary bg-[url(${data.image})] bg-center bg-cover cursor-pointer group relative`}>
              <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
            </div>
          ))
        ) : (
          <p>you don&apos;t have any videos</p>
        )}
      </div>
      {/* <!-- post list end --> */}
    </>
  );
}

export function BlogImages() {
  const [visibility, setVisibility] = useState(false);
  const {images} = useUser();

  function ClosePopup(e) {
    setVisibility(e);
  }
  return (
    <>
    <ComponentPopup onClose={ClosePopup} show={visibility}>
      <SingleImage />
    </ComponentPopup>
    <div className="post-list flex flex-wrap gap-3 h-96 overflow-hidden overflow-y-auto">
      <div className="grid grid-cols-2 grid-rows-5 w-full gap-4">
        {(images.blogs && images.blogs.length > 0) ? images.blogs.map((data, index) => (
              <div
                key={index}
                onClick={() => setVisibility(!visibility)}
                className={`bg-[url(${data.image})] rounded-xl  bg-secondary bg-cover bg-center cursor-pointer group relative item ${
                  index === 0 ? "row-span-1" : index === 1 || index === 2 || index === 3 ? "row-span-2" : index === 5 ? "row-span-1 col-span-2" : "row-span-1"
                }`}>
                <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
              </div>
          )
        ):(
          <p>you don&apos;t have any images</p>
        )}
      </div>
    </div>
    </>
  );
}
