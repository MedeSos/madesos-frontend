import { useEffect, useState } from "react";
import { Profile, AddPost } from "./DashboardUtility";
import MainDashboardBody from "./MainDashboardBody";
import ComponentPopup from "./ComponentPopup";
import {EditProfile} from "./UpdateProfile";
import axios from "axios";
import { useUser } from "../context/user";

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
  const {user} = useUser();

  function popupCloseHandler(e) {
    setVisibility(e);
  }
  
  return (
    <>
      {/* <!-- profile details --> */}
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
          <EditProfile user={user}/>
        </ComponentPopup>
        <div className="relative"></div>
        <div className="container">
          <span className="flex align-baseline">
            <h4 className="mr-1 font-bold">Name:</h4>
            <p className="">{user.name || ""}</p>
          </span>
          <hr className="border-black border-r-2 my-3" />
          <span className="flex align-baseline">
            <h4 className="mr-1 font-bold">Email:</h4>
            <p className="">{user.email || ""}</p>
          </span>
          <hr className="border-black border-r-2 my-3" />
          <span className="flex align-baseline">
            <h4 className="mr-1 font-bold">Title:</h4>
            <p className="">{user.title || ""}</p>
          </span>
          <hr className="border-black border-r-2 my-3" />
          <span className="">
            <h4 className="mr-1 font-bold">Description:</h4>
            <p className="">{user.description || ""}</p>
          </span>
        </div>
      </div>
      {/* <!-- profile details end --> */}
    </>
  );
}