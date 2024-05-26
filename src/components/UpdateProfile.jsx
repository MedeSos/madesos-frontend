import { Profile, AddPost } from "./DashboardUtility";
import MainDashboardBody from "./MainDashboardBody";

export default function UpdateProfile() {
  return (
    <>
      <MainDashboardBody headerStatus={true} footer={<AddPost />}>
        <Profile changes={true} />
        <EditProfile />
      </MainDashboardBody>
    </>
  );
}
function EditProfile() {
  return (
    <>
      {/* <!-- post upload box --> */}
      <div className="p-4 bg-secondary mt-5 rounded-xl">
        <h4 className="text-2xl font-semibold my-3 mb-5 tracking-widest">Edit Profile</h4>
        <form action="">
          <input type="text" placeholder="Your Name" className="w-full  rounded p-4 mb-4 placeholder:font-extralight text-lg" />
          <input type="text" placeholder="Your Title" className="w-full  rounded p-4 mb-4 placeholder:font-extralight text-lg" />
          <textarea placeholder="Description ..." className="w-full  rounded p-4 mb-4 placeholder:font-extralight text-lg h-[123px]"></textarea>

          <h4 className="text-2xl font-semibold mt-1 mb-3 tracking-widest">Edit Account</h4>
          <input type="email" placeholder="Your E-Mail" className="w-full  rounded p-4 mb-4 placeholder:font-extralight text-lg" />
          <div className="password relative">
            <input type="password" placeholder="Password" className="w-full  rounded p-4 mb-4 placeholder:font-extralight text-lg" />
            <img src="./../src/assets/icons/eye-close.svg" alt="eye close icon" className="absolute right-3 top-1/4 -translate-y-1/2 cursor-pointer" />
          </div>

          <div className=" mt-4 text-2xl ">
            <button className="px-2 m-1 bg-zinc-500 text-white uppercase">Cancel</button>
            <button className="px-2 m-1 bg-[#39A7FF] text-white uppercase">Save</button>
          </div>
        </form>
      </div>
      {/* <!-- post upload box end --> */}
    </>
  );
}
