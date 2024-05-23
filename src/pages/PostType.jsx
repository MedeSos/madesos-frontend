import UpdateBody from "../components/UpdateBody";

export default function PostType() {
  return (
    <>
      <UpdateBody>
        <PostCategory />
      </UpdateBody>
    </>
  );
}
function PostCategory() {
  return (
    <>
      {/* <!-- post upload box --> */}
      <div className="p-6 bg-secondary mt-5 rounded-xl">
        <h4 className="text-4xl font-semibold my-3 mb-5">Select Post</h4>
        <div className="flex flex-col gap-8">
          <div className="py-5 px-10 bg-white border-4 border-crims rounded-xl flex justify-center shadow-md cursor-pointer">
            <img src="./../src/assets/icons/image.svg" alt="" className="w-24" />
          </div>
          <div className="py-5 px-10 bg-white border-4 border-crims rounded-xl flex justify-center shadow-md cursor-pointer">
            <img src="./../src/assets/icons/video.svg" alt="" className="w-24" />
          </div>
          <div className="py-5 px-10 bg-white border-4 border-crims rounded-xl flex justify-center shadow-md cursor-pointer">
            <img src="./../src/assets/icons/blog.svg" alt="" className="w-24" />
          </div>
        </div>
        <div className="action flex justify-end mt-8">
          <button className="text-white bg-primary-dark px-4 py-1 text-xl">NEXT</button>
        </div>
      </div>
      {/* <!-- post upload box end --> */}
    </>
  );
}
