import { converttime } from "../utils/converttime";
import { ModalPopup } from "./SinglePost";

export default function SingleVideo({ rounded = "", userTarget }) {
  const date = converttime(userTarget.createdAt);
  return (
    <>
      <ModalPopup>
        <div className={`flex flex-col shadow-trick overflow-hidden ${rounded} w-full`}>
          {/* <div className="bg-neutral-300 h-1/2 bg-[url(https://picsum.photos/200)] bg-cover bg-center"></div> */}
          <div className="bg-slate-600 min-h-[300px] flex items-center">
            {/* <!-- <iframe class="w-full aspect-video" src="./../asset/video/demo.mp4"></iframe> --> */}
            <video controls muted className="w-full">
              <source src={userTarget.media} type="video/mp4" />
            </video>
          </div>

          <div className="p-6 bg-secondary min-h-1/2 relative">
            <div className="p-4 bg-white text-xs font-[275]">
              <small className="text-xs font-extralight">{date}</small>
              <h1 className="text-xl font-semibold mb-1">{userTarget.title}</h1>
              <p>{userTarget.body}</p>
              <div className="flex justify-end">
                <button className="px-2 bg-primary-dark text-white mt-5">Share</button>
              </div>
            </div>
          </div>
        </div>
      </ModalPopup>
    </>
  );
}
