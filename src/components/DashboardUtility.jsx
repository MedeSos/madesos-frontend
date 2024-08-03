import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ComponentPopup from "./ComponentPopup";
import MainMenu from './MainMenu';
import { useUser } from "../context/user";
import axios from "axios";
import { AlertMessage } from './AlertMessage';

export function Profile({ changes = false }) {
  const [visiblity, setVisibility] = useState(false);
  const {user} = useUser();

  function popupCloseHandler(e) {
    setVisibility(e);
  }
  if (changes) {
    return <ProfileChange />;
  }
  return (
    <>
      {/* <!-- profile --> */}
      <div className="flex flex-wrap items-center relative">
        <div className="profile-image me-7 relative group bg-neutral-300 rounded-full border-4 border-white overflow-hidden">
          {user.profileImage ? (
            <img src={user.profileImage} alt="profile image" className="w-full h-full object-cover" />
          ):(
            <img src="./../src/assets/icons/user.png" alt="profile image" className="w-full h-full object-cover p-5" />
          )}
        </div>
        <div className="w-[55%] break-words">
          <p className="text-3xl font-semibold">{user.name || "Your Name"}</p>
          <p className="text-lg font-light">{user.title || "post title here"}</p>
        </div>
        <img src="./../src/assets/icons/settings.svg" alt="setting icon" className="absolute top-4 right-0 cursor-pointer" onClick={() => setVisibility(!visiblity)} />
      </div>
      <ComponentPopup onClose={popupCloseHandler} show={visiblity} title="Menu">
        <MainMenu/>
      </ComponentPopup>
      {/* <!-- end profile  --> */}
    </>
  );
}
export function ProfileChange() {
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState(null);
  const {user, setUser} = useUser();
  
  useEffect(() => {
    if(image !== null){
      ChangeProfile();
      setImage(null);
    }
    let timeOut = setTimeout(() => {
      setMsg(null)
    },3000);
    return () => clearTimeout(timeOut);
  }, [image]);

  async function ChangeProfile(){
    const formData = new FormData();
    const id = localStorage.getItem("id");
    try{
      if(image!==null){
        formData.append("profile-image", image);
        const response = await axios.patch(`/v1/api/user/${id}`, formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        const result = await response.data.data;
        setUser(result);
        setMsg({message:response.data.message, status: true});
      }
    }catch(error){
      setMsg({message:error.response.data.message,status: false});
    }
  }

  return (
    <>
      {/* <!-- profile --> */}
      <div className="flex flex-wrap items-center">
        <div className="profile-image me-7 relative group bg-neutral-300 rounded-full border-4 border-white overflow-hidden">
          {user.profileImage ? (
            <img src={user.profileImage} alt="profile image" className="w-full h-full object-cover" />
            ) : (
            <img src="./../src/assets/icons/user.png" alt="profile image" className="w-full h-full object-cover p-10" />
            )
          }
          {/* <!-- if image not exist --> */}
          {/* <img src={showImage} alt="" className="w-full h-full object-cover p-10" /> */}
          {/* <!-- if image exist --> */}
          {/* <!-- <img src="./../asset/icons/yourprofile.png" alt="" class="w-full h-full object-cover"> --> */}
          <input type="file" id="profileImage" className="hidden" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
          <label htmlFor="profileImage" className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center group-hover:bg-black group-hover:bg-opacity-50 h-full w-full hover:cursor-pointer">
            <p className="hidden group-hover:block group-hover:text-white">Change</p>
          </label>
        </div>
      </div>
      {msg !== null && <AlertMessage type={msg.status} style="mt-2">{msg.message}</AlertMessage>}
      <NavLink to="/" className="mt-3 underline block font-bold text-xl">
        Back To Dashboard
      </NavLink>
      {/* <!-- end profile  --> */}
    </>
  );
}

export function HeaderChange({ changes = false }) {
  const { user, setUser } = useUser();
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (image !== null) {
      ChangeBanner();
      setImage(null);
    }
  }, [image]);

  async function ChangeBanner() {
    const formData = new FormData();
    const id = localStorage.getItem("id");
    try {
      if (image !== null) {
        formData.append("background-image", image);
        const response = await axios.patch(`/v1/api/user/${id}`, formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        const result = await response.data.data;
        setUser(result);
        setMsg({ message: response.data.message, status: true });
        setTimeout(()=>setMsg(null),3000);
      }
    } catch (error) {
      console.log(error)
    }
  }
  if (!changes) {
    return (
      <>
        <header className="profile-header bg-neutral-300">
          {user.backgroundImage && (
            <img src={user.backgroundImage} alt="header image" className="w-full h-full object-cover" />
          )}
        </header>
      </>
    );
  }
  return (
    <>
      <header className="profile-header bg-neutral-300 relative group">
        {/* <!-- if image not exist --> */}
        {user.backgroundImage ? (
            <img src={user.backgroundImage} alt="header image" className="w-full h-full object-cover" />
          ):(
            <img src="./../src/assets/icons/images.svg" alt="header image" className="w-full h-full p-10" />
          )}
        {/* <!-- if image exist --> */}
        {/* <img src="./../asset/icons/yourbanner.png" alt="" className="w-full h-full object-cover" /> */}

        <input type="file" id="bannerImage" className="hidden" onChange={(e) => setImage(e.target.files[0])}/>
        <label htmlFor="bannerImage" className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center group-hover:bg-black group-hover:bg-opacity-50 h-full w-full  hover:cursor-pointer">
          <p className="hidden group-hover:block group-hover:text-white">Change</p>
        </label>
      </header>
    </>
  );
}

export function PostCount() {
  return (
    <>
      {/* <!-- post count --> */}
      <div className="flex flex-row justify-around my-5 w-full bg-secondary rounded-full">
        <div className="text-center p-2">
          <p className="text-2xl font-semibold">205</p>
          <p className="text-xl font-light -m-2 tracking-widest">image</p>
        </div>
        <div className="text-center  p-2">
          <p className="text-2xl font-semibold">205</p>
          <p className="text-xl font-light -m-2 tracking-widest">video</p>
        </div>
        <div className="text-center  p-2">
          <p className="text-2xl font-semibold">205</p>
          <p className="text-xl font-light -m-2 tracking-widest">blog</p>
        </div>
      </div>
      {/* <!-- end post count --> */}
    </>
  );
}

export function ProfileDescription() {
  const {user} = useUser();
  return (
    <>
      {/* <!-- profile description --> */}
      <div className="profile-description overflow-hidden overflow-y-auto bg-secondary h-32 rounded-2xl p-4 text-base font-light">{user.description || "your description here"}</div>
      {/* <!-- profile description end  --> */}
    </>
  );
}

export function PostCategory({ setCategory, Category }) {
  let defaultCategory = Category;
  function HandleActive(e) {
    let postClick = e.target;

    if (postClick.hasAttribute("title")) {
      setCategory(postClick.getAttribute("title"));
    }
  }
  return (
    <>
      {/* <!-- post category --> */}
      <div className="flex flex-row my-5 bg-secondary w-2/3 mx-auto rounded-full items-center justify-between">
        <img
          src="./../src/assets/icons/image.svg"
          alt="image icon"
          className={`post-icon cursor-pointer py-2 ${
            defaultCategory === "image" ? "post-category-active" : "px-7"
          }`}
          onClick={HandleActive}
          title="image"
        />
        <img
          src="./../src/assets/icons/video.svg"
          alt="video icon"
          className={`post-icon cursor-pointer py-2  ${
            defaultCategory === "video" ? "post-category-active" : "px-7"
          }`}
          onClick={HandleActive}
          title="video"
        />
        <img
          src="./../src/assets/icons/blog.svg"
          alt="blog icon"
          className={`post-icon cursor-pointer py-2  ${
            defaultCategory === "blog" ? "post-category-active" : "px-7"
          } `}
          onClick={HandleActive}
          title="blog"
        />
      </div>
      {/* <!-- post category end  --> */}
    </>
  );
}

export function AddPost() {
  return (
    <>
      {/* <!-- add post button  --> */}
      <div className="bg-secondary text-white px-2 py-4 rounded-full mt-4 absolute right-1 bottom-0 left-1 z-20 text-center h-[92px] flex justify-center items-center">
        <Link to="/update">
          <img
            src="./../src/assets/icons/plus.svg"
            alt="plus button"
            className="w-12"
          />
        </Link>
      </div>
      {/* <!-- add post button end  --> */}
    </>
  );
}
