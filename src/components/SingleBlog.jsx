import { useState } from "react";
import { ModalPopup } from "./SinglePost";
import { converttime } from "../utils/converttime.js";

export default function SingleBlog({ rounded = "", userTarget }) {
  const [readMore, setReadMore] = useState("overflow-y-hidden");
  rounded = "rounded-2xl";
  const date = converttime(userTarget.createdAt);

  function HandleReadMore(e) {
    let readMoreBox = e.target.parentElement.parentElement;
    setReadMore("overflow-y-auto");
    readMoreBox.classList.add("hidden");
  }

  return (
    <>
      <ModalPopup>
        <div className={`flex flex-col shadow-trick overflow-hidden ${rounded} w-full`}>
          <div style={{ backgroundImage:`url(${userTarget.media})` }} className="bg-neutral-300 h-44 bg-cover bg-center"></div>
          {/* <!-- <div className="post-body p-5 bg-secondary grow overflow-y-auto relative"> --> */}
          <div className={`post-body p-5 bg-secondary grow ${readMore} relative`}>
            <small className="text-xs font-extralight">{date}</small>
            <h1 className="text-xl font-semibold mb-1">{userTarget.title}</h1>
            <div className="post-content text-xs font-[275]">{userTarget.content}</div>

            {/* <!-- read more --> */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#B3CBD9] from-20%">
              <div className="h-full relative flex justify-center items-center">
                <button className="text-sm" onClick={HandleReadMore}>
                  Read More
                </button>
                <button className="bg-primary-dark text-sm text-white font-bold px-2 absolute right-5 font-light">Share</button>
              </div>
            </div>
            {/* <!-- read more end  --> */}
          </div>
        </div>
      </ModalPopup>
    </>
  );
}
