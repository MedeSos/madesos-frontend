import { HeaderChange } from "./DashboardUtility";
import { BoxContainer, ContentBody } from "./Frame";

export default function SinglePost({ children, padding }) {
  return (
    <>
      <BoxContainer>
        <ContentBody header={<HeaderChange />} main={<ModalImage padding={padding}>{children}</ModalImage>}></ContentBody>
      </BoxContainer>
    </>
  );
}

function ModalImage({ children, padding }) {
  return (
    <>
      {/* <!-- modal image --> */}
      <div className={`bg-black bg-opacity-20 absolute top-0 left-0 right-0 bottom-0 ${padding}  flex`}>{children}</div>
      {/* <!-- modal image end --> */}
    </>
  );
}
