import { useEffect, useState } from "react";
import { Profile, AddPost } from "./DashboardUtility";
import MainDashboardBody from "./MainDashboardBody";
import ComponentPopup from "./ComponentPopup";
import {EditProfile} from "./UpdateProfile";
import axios from "axios";

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
  const [user, setUser] = useState({});

  function popupCloseHandler(e) {
    setVisibility(e);
  }

  useEffect(() => {
     refreshUser();
  }, [user]);
  
  async function refreshUser(){
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
          <hr className="border-black border-r-2 my-1" />
          <span className="flex align-baseline">
            <h4 className="mr-1 font-bold">Email:</h4>
            <p className="">{user.email || ""}</p>
          </span>
          <hr className="border-black border-r-2 my-1" />
          <span className="flex align-baseline">
            <h4 className="mr-1 font-bold">Title:</h4>
            <p className="">{user.title || ""}</p>
          </span>
          <hr className="border-black border-r-2 my-1" />
          <span className="flex align-baseline">
            <h4 className="mr-1 font-bold">Status:</h4>
            <p className="">Single</p>
          </span>
          <hr className="border-black border-r-2 my-1" />
          <span className="">
            <h4 className="mr-1 font-bold">Description:</h4>
            <p className="">{user.description || ""}</p>
          </span>
        </div>

        <div className="mt-5">
          <h3>Create Status</h3>
          <form className="flex flex-col">
            <div className="flex flex-col">
              <input
                type="text"
                id="name"
                className="flex-grow px-4 py-5 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What's on your mind?"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-r py-2 w-16 mt-2"
              >Post</button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- profile details end --> */}
    </>
  );
}