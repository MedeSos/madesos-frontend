import { Link } from "react-router-dom";
import { useState } from "react";

export function BlogPosts() {
  return (
    <>
      {/* <!-- post list  --> */}
      <div className="post-list flex flex-wrap gap-3 h-96  justify-between overflow-y-auto">
        <Link
          to={"/blog/post"}
          className="rounded-xl h-32 basis-[48%] bg-secondary bg-[url(https://dummyimage.com/150)] bg-cover bg-center cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/post"}
          className="rounded-xl h-32 basis-[48%] bg-secondary bg-[url(https://dummyimage.com/150)] bg-cover bg-center cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/post"}
          className="rounded-xl h-32 basis-[48%] bg-secondary bg-[url(https://dummyimage.com/150)] bg-cover bg-center cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/post"}
          className="rounded-xl h-32 basis-[48%] bg-secondary bg-[url(https://dummyimage.com/150)] bg-cover bg-center cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/post"}
          className="rounded-xl h-32 basis-[48%] bg-secondary bg-[url(https://dummyimage.com/150)] bg-cover bg-center cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/post"}
          className="rounded-xl h-32 basis-[48%] bg-secondary bg-[url(https://dummyimage.com/150)] bg-cover bg-center cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/post"}
          className="rounded-xl h-32 basis-[48%] bg-secondary bg-[url(https://dummyimage.com/150)] bg-cover bg-center cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/post"}
          className="rounded-xl h-32 basis-[48%] bg-secondary bg-[url(https://dummyimage.com/150)] bg-cover bg-center cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/post"}
          className="rounded-xl h-32 basis-[48%] bg-secondary bg-[url(https://dummyimage.com/150)] bg-cover bg-center cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/post"}
          className="rounded-xl h-32 basis-[48%] bg-secondary bg-[url(https://dummyimage.com/150)] bg-cover bg-center cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/post"}
          className="rounded-xl h-32 basis-[48%] bg-secondary bg-[url(https://dummyimage.com/150)] bg-cover bg-center cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
      </div>
      {/* <!-- post list end --> */}
    </>
  );
}

export function BlogVideos() {
  return (
    <>
      {/* <!-- post list  --> */}
      <div className="post-list flex flex-wrap gap-3 h-96 overflow-hidden overflow-y-auto">
        <Link
          to={"/blog/video"}
          className="rounded-xl h-32 w-full bg-secondary bg-[url(https://dummyimage.com/150)] bg-center bg-cover cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/video"}
          className="rounded-xl h-32 w-full bg-secondary bg-[url(https://dummyimage.com/150)] bg-center bg-cover cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/video"}
          className="rounded-xl h-32 w-full bg-secondary bg-[url(https://dummyimage.com/150)] bg-center bg-cover cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/video"}
          className="rounded-xl h-32 w-full bg-secondary bg-[url(https://dummyimage.com/150)] bg-center bg-cover cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
        <Link
          to={"/blog/video"}
          className="rounded-xl h-32 w-full bg-secondary bg-[url(https://dummyimage.com/150)] bg-center bg-cover cursor-pointer group relative"
        >
          <div className="hidden absolute group-hover:block group-hover:bg-black group-hover:opacity-30 top-0 right-0 bottom-0 left-0"></div>
        </Link>
      </div>
      {/* <!-- post list end --> */}
    </>
  );
}

const images = [
  {
    src: "src/assets/images/145px.webp",
    alt: "Gambar 1",
    height: "145px",
    width: "211px",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZq5-eQgPwnLXZVz_HqLMsjtWQ0QBgnDhIg&s",
    alt: "Gambar 2",
    height: "262px",
    width: "211px",
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/10/04/06/52/mountain-970704_640.jpg",
    alt: "Gambar 3",
    height: "170px",
    width: "211px",
  },
  {
    src: "https://i.pinimg.com/736x/ea/8c/15/ea8c1519f8aee1dfc5cf5d5454844927.jpg",
    alt: "Gambar 4",
    height: "170px",
    width: "211px",
  },
  {
    src: "https://i.pinimg.com/736x/dc/3d/29/dc3d290b633e18ff6b41d1d7ce36eab1.jpg",
    alt: "Gambar 5",
    height: "99px",
    width: "211px",
  },
  {
    src: "src/assets/images/test.webp",
    alt: "Gambar 6",
    width: "444px",
    height: "110px",
  },
];

export function BlogImages() {
  const [image, setImage] = useState(images);
  return (
    <div className="wrap">
      <section>
        <h1>CSS galler</h1>
        <div className="container">
          <div className="grid grid-cols-2 grid-rows-5 w-full gap-4 h-[600px]">
            {image.map((data, index) => {
              return (
                <div
                  key={index}
                  className={`item ${
                    index === 0
                      ? "row-span-1"
                      : index === 1 || index === 2 || index === 3
                      ? "row-span-2"
                      : index === 5
                      ? "row-span-1 col-span-2"
                      : "row-span-1"
                  }`}
                >
                  <img
                    src={data.src}
                    alt={data.alt}
                    width={data.width}
                    height={data.height}
                    className={`object-cover w-[${data.width}] h-full rounded-xl`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
