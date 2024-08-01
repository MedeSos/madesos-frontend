import axios from "axios";
import { Profile, AddPost } from "./DashboardUtility";
import MainDashboardBody from "./MainDashboardBody";
import { useState } from "react";
import { AlertMessage } from './AlertMessage';
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/user";

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
export function EditProfile(data) {
  const user = data.user;
  const [name, setName] = useState(data.user.name || "");
  const [title, setTitle] = useState(data.user.title || "");
  const [description, setDescription] = useState(data.user.description || "");
  const [password, setPassword] = useState(null);
  const [msg,setMsg] = useState(null);
  const [status,setStatus] = useState(null);
  const navigate = useNavigate();
  const {setUser} = useUser();

  async function updateUser(e){
    e.preventDefault();
    const newData = new FormData();
    newData.append("name", name);
    newData.append("title", title);
    newData.append("description", description);
    if(password !== null) newData.append("password", password);
    try {
      const id = user._id;
      const response = await axios.patch(`/v1/api/user/${id}`, newData, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setMsg(response.data.message);
        setStatus(true);
        setUser(response.data.data);
      } catch (error) {
        setMsg(error.response.data.message);
        setStatus(false);
      console.log(error);
    }
  }
  return (
    <>
      {/* <!-- post upload box --> */}
        {msg !== null && <AlertMessage type={status} >{msg}</AlertMessage>}
      <div className="p-4 bg-secondary mt-5 rounded-xl">
        <h4 className="text-2xl font-semibold my-3 mb-5 tracking-widest">Edit Profile</h4>
        <form onSubmit={updateUser}>
          <input type="text" placeholder="Your Name" className="w-full  rounded p-4 mb-4 placeholder:font-extralight text-lg" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder="Your Title" className="w-full  rounded p-4 mb-4 placeholder:font-extralight text-lg" value={ title} onChange={(e) => setTitle(e.target.value)}/>
          <textarea placeholder="Description ..." className="w-full  rounded p-4 mb-4 placeholder:font-extralight text-lg h-[123px]" onChange={(e) => setDescription(e.target.value)}>{description}</textarea>

          <h4 className="text-2xl font-semibold mt-1 mb-3 tracking-widest">Edit Account</h4>
          <input type="email" placeholder="Your E-Mail" className="w-full  rounded p-4 mb-4 placeholder:font-extralight text-lg" value={user.email || ""}/>
          <div className="password relative">
            <input type="password" placeholder="Password" className="w-full  rounded p-4 mb-4 placeholder:font-extralight text-lg" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <img src="./../src/assets/icons/eye-close.svg" alt="eye close icon" className="absolute right-3 top-1/4 -translate-y-1/2 cursor-pointer" />
          </div>

          <div className=" mt-4 text-2xl ">
            <button type="button" className="px-2 m-1 bg-zinc-500 text-white uppercase" onClick={()=>{navigate("/")}}>Cancel</button>
            <button type="submit" className="px-2 m-1 bg-[#39A7FF] text-white uppercase">Save</button>
          </div>
        </form>
      </div>
      {/* <!-- post upload box end --> */}
    </>
  );
}
