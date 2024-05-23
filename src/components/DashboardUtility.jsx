export function Profile({ changes = false }) {
  if (changes) {
    return <ProfileChange />;
  }
  return (
    <>
      {/* <!-- profile --> */}
      <div className="flex flex-wrap items-center">
        <div className="profile-image me-7 relative group bg-neutral-300 rounded-full border-4 border-white overflow-hidden">
          <img src="./../src/assets/icons/user.png" alt="" className="w-full h-full object-cover p-5" />
        </div>
        <div>
          <p className="text-3xl font-semibold">Your Name</p>
          <p className="text-lg font-light">post title here</p>
        </div>
      </div>
      {/* <!-- end profile  --> */}
    </>
  );
}
export function ProfileChange() {
  return (
    <>
      {/* <!-- profile --> */}
      <div className="flex flex-wrap items-center">
        <div className="profile-image me-7 relative group bg-neutral-300 rounded-full border-4 border-white overflow-hidden">
          {/* <!-- if image not exist --> */}
          <img src="./../src/assets/icons/images.svg" alt="" className="w-full h-full object-cover p-10" />
          {/* <!-- if image exist --> */}
          {/* <!-- <img src="./../asset/icons/yourprofile.png" alt="" class="w-full h-full object-cover"> --> */}
          <input type="file" id="profileImage" className="hidden" />
          <label htmlFor="profileImage" className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center group-hover:bg-black group-hover:bg-opacity-50 h-full w-full">
            <p className="hidden group-hover:block group-hover:text-white">Change</p>
          </label>
        </div>
      </div>
      {/* <!-- end profile  --> */}
    </>
  );
}

export function HeaderChange({ changes = false }) {
  if (!changes) {
    return <header className="profile-header bg-neutral-300"></header>;
  }
  return (
    <>
      <header className="profile-header bg-neutral-300 relative group">
        {/* <!-- if image not exist --> */}
        <img src="./../src/assets/icons/images.svg" alt="" className="w-full h-full p-10" />
        {/* <!-- if image exist --> */}
        {/* <!-- <img src="./../asset/icons/yourbanner.png" alt="" class="w-full h-full object-cover"> --> */}

        <input type="file" id="bannerImage" className="hidden" />
        <label htmlFor="bannerImage" className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center group-hover:bg-black group-hover:bg-opacity-50 h-full w-full">
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
  return (
    <>
      {/* <!-- profile description --> */}
      <div className="profile-description overflow-hidden overflow-y-auto bg-secondary h-32 rounded-2xl p-4 text-base font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi doloremque nostrum dolores expedita sed voluptatibus odit enim tenetur quos?
      </div>
      {/* <!-- profile description end  --> */}
    </>
  );
}

export function PostCategory() {
  return (
    <>
      {/* <!-- post category --> */}
      <div className="flex flex-row my-5 bg-secondary w-2/3 mx-auto rounded-full items-center justify-between">
        <div className="post-icon cursor-pointer px-10 py-2 rounded-full bg-[#FFFFFF] border-4 border-[#FEEED9]  shadow-md">
          <img src="./../src/assets/icons/image.svg" alt="image icon" />
        </div>
        <div className="post-icon cursor-pointer px-7 py-2 ">
          <img src="./../src/assets/icons/video.svg" alt="video icon" />
        </div>
        <div className="post-icon cursor-pointer px-7 py-2 ">
          <img src="./../src/assets/icons/blog.svg" alt="blog icon" />
        </div>
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
        <button>
          <img src="./../src/assets/icons/plus.svg" alt="plus button" className="w-12" />
        </button>
      </div>
      {/* <!-- add post button end  --> */}
    </>
  );
}
