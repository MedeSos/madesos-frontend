import { useState } from "react";
import { Link } from "react-router-dom";
import ComponentPopup from "./ComponentPopup";
import SingleBlog from "./SingleBlog";
import SingleVideo from "./SingleVideo";
import SingleImage from "./SingleImage";

function generateData(data,count){
  let dummyArrayData = [];
  while(count > 0){
    dummyArrayData.push({...data});
    count--;
  }
  return dummyArrayData;
}

const dummyData = generateData({
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi doloremque nostrum dolores expedita sed voluptatibus odit enim tenetur quos?",
  creatdAt: "15-12-2024",
  updatedAt: "15-12-2024",
  image: "https://picsum.photos/200"
},10);


export function BlogPosts() {
  const [visibility, setVisibility] = useState(false);
  const [blogs, setBlogs] = useState(dummyData);

  function ClosePopup(e) {
    setVisibility(e);
  }
  return (
    <>
      {/* <!-- post list  --> */}
      <ComponentPopup onClose={ClosePopup} show={visibility}>
        <SingleBlog />
      </ComponentPopup>
      <div className="post-list flex flex-wrap gap-3 h-96  justify-between overflow-y-auto">
        {blogs.map((data, index) => (
          <>
            <div key={index} onClick={() => setVisibility(!visibility)} className={`rounded-xl h-32 basis-[48%] bg-secondary bg-[url(${data.image})] bg-cover bg-center cursor-pointer group relative`}>
              <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
            </div>
          </>
        ))}
      </div>
      {/* <!-- post list end --> */}
    </>
  );
}

export function BlogVideos() {
  const [visibility, setVisibility] = useState(false);
  const [blogs, setBlogs] = useState(dummyData);

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
        {blogs.map((data, index) => (
          <>
          <div
            key={index}
            onClick={() => setVisibility(!visibility)}
            className={`rounded-xl h-32 w-full bg-secondary bg-[url(${data.image})] bg-center bg-cover cursor-pointer group relative`} >
            <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
          </div>
          </>
        ))}
      </div>
      {/* <!-- post list end --> */}
    </>
  );
}

export function BlogImages() {
  const [visibility, setVisibility] = useState(false);
  const [blogs, setBlogs] = useState(dummyData);

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
        {blogs.map((data, index) => {
          return (
            <>
              <div
                key={index}
                onClick={() => setVisibility(!visibility)}
                className={`bg-[url(${data.image})] rounded-xl  bg-secondary bg-cover bg-center cursor-pointer group relative item ${
                  index === 0 ? "row-span-1" : index === 1 || index === 2 || index === 3 ? "row-span-2" : index === 5 ? "row-span-1 col-span-2" : "row-span-1"
                }`}>
                <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
              </div>
            </>
          );
        })}
      </div>
    </div>
    </>
  );
}
