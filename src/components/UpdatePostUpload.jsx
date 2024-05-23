import UpdateBody from "./UpdateBody";

export default function UpdatePostUpload() {
  return (
    <>
      <UpdateBody>
        <EditPostUpload />
      </UpdateBody>
    </>
  );
}
function EditPostUpload() {
  return (
    <>
      {/* <!-- post upload box --> */}
      <div className="p-4 bg-secondary mt-5 rounded-xl">
        <h4 className="text-2xl font-semibold my-3 mb-5 tracking-widest">Upload Your Post</h4>
        <form action="">
          <input type="text" placeholder="Your Name" className="w-full  rounded p-4 mb-4 placeholder:font-extralight text-lg" />
          <input type="text" placeholder="Your Title" className="w-full  rounded p-4 mb-4 placeholder:font-extralight text-lg" />
          <textarea name="" id="" cols="10" rows="5" placeholder="Description ..." className="w-full  rounded p-4 mb-4 placeholder:font-extralight text-lg"></textarea>
          <div>
            <input type="file" id="file" className="hidden" />
            <label htmlFor="file" className="w-full h-[210px] bg-[#FFFFFF] block rounded cursor-pointer p-2">
              <div className="border-dashed border-2 border-slate-400 h-full flex flex-col">
                <img src="./../src/assets/icons/image-gallery.png" alt="" className="w-12 mx-auto mt-10 mb-3" />
                <p className="text-center">Upload your image / Video</p>
                <p className="text-center text-xs font-light ">Support mp4/mkv for video</p>
                <p className="text-center text-xs font-light ">Support JPG/PNG for video</p>
              </div>
            </label>
          </div>
          <div className="flex justify-end mt-4 text-2xl ">
            <button className="px-2 m-1 bg-zinc-500 text-white uppercase">Cancel</button>
            <button className="px-2 m-1 bg-[#39A7FF] text-white uppercase">Save</button>
          </div>
        </form>
      </div>
      {/* <!-- post upload box end --> */}
    </>
  );
}
