import { useParams } from "react-router-dom";
import UpdatePostUpload from "./../components/UpdatePostUpload";

export default function UpdatePage() {
  let params = useParams();
  let getParam = params.postCategory;

  return (
    <>
      {/* <UpdateProfile /> */}
      <UpdatePostUpload />
    </>
  );
}
