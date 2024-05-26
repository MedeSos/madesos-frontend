import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col items-center justify-center w-1/2 h-1/2 mx-auto text-white  mt-40 p-10">
      <h1 className=" text-3xl  ">
        {error.status} {error.statusText}
      </h1>
    </div>
  );
}
