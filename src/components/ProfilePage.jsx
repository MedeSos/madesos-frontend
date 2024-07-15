import { useState } from "react";
import { Profile, AddPost } from "./DashboardUtility";
import MainDashboardBody from "./MainDashboardBody";
import ComponentPopup from "./ComponentPopup";
import UpdateProfile from "./UpdateProfile";

export default function ProfilePages() {
  return (
    <>
      <MainDashboardBody headerStatus={true} footer={<AddPost />}>
        <Profile changes={true} />
        <ProfilePage />
      </MainDashboardBody>
    </>
  );
}
function ProfilePage() {
  const [visiblity, setVisibility] = useState(false);

  function popupCloseHandler(e) {
    setVisibility(e);
  }
  return (
    <>
      {/* <!-- post upload box --> */}
      <div className="p-4 bg-secondary mt-5 rounded-xl">
        <h4 className="text-2xl font-semibold my-3 mb-5 tracking-widest flex items-baseline">
          Profile Details
          <span
            className="ml-[180px] cursor-pointer"
            onClick={() => setVisibility(!visiblity)}
          >
            <img src="src/assets/icons/EditDetailsProfile.svg" alt="" />
          </span>
        </h4>
        <ComponentPopup
          onClose={popupCloseHandler}
          show={visiblity}
          title="Edit Profile"
        >
          <UpdateProfile />
        </ComponentPopup>
        <div className="relative"></div>
        <div className="container ml-4">
          <span className="flex align-baseline">
            <h4 className="mr-1">Nama Panggilan:</h4>
            <p className="">Sakti</p>
          </span>
          <hr className="border-black border-r-2 my-1" />
          <span className="flex align-baseline">
            <h4 className="mr-1">Status:</h4>
            <p className="">Single</p>
          </span>
          <hr className="border-black border-r-2 my-1" />
          <span className="flex align-baseline">
            <h4 className="mr-1">Email:</h4>
            <p className="">prabowosakti2023@gmail.com</p>
          </span>
          <hr className="border-black border-r-2 my-1" />
          <span className="">
            <h4 className="mr-1">Deskripsi:</h4>
            <p className="">
              Halo, perkenalkan saya prabowo sakti, saya merupakan seorang front
              end developer dan berencana akan menjadi full-stack developer,
              dengan mempelajari backend pada awal tahun 2026
            </p>
          </span>
        </div>

        <div className="mt-5">
          <h3>Buat Status</h3>
          <form className="flex flex-col">
            <div className="flex flex-col">
              <input
                type="text"
                id="name"
                className="flex-grow px-4 py-5 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Apa yang kamu pikirkan hari ini?"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-r py-2 w-16 mt-2"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- post upload box end --> */}
    </>
  );
}
