import { useParams } from "react-router-dom";
import UpdateProfile from "../components/UpdateProfile";
import UpdatePost from "./../components/UpdatePost";
import UpdatePostUpload from "./../components/UpdatePostUpload";

export default function UpdatePage() {
  let params = useParams();
  let getParam = params.postCategory;
  console.log(getParam);

  return (
    <>
      {/* <UpdateProfile /> */}
      <UpdatePostUpload />
    </>
  );
}
