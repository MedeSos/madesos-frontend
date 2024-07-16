import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ComponentPopup = props => {
  const [show, setShow] = useState(false);
  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className="invisible opacity-0 fixed inset-y-0 inset-x-0 bg-black/70 transition-[opacity_500ms] z-30 overflow-auto">
      <div className="m-[70px_auto] p-5 bg-[#fff] rounded-md w-[30%] relative transition duration-5000 ease-in-out">
        <h2 className="mt-0 text-[#333] ">{props.title}</h2>
        <span onClick={closeHandler} className="absolute top-5 right-8 transition duration-200 text-3xl font-bold no-underline text-[#333] cursor-pointer text-black">
          &times;
        </span>
        <div className="max-h-[30%] overflow-auto">{props.children}</div>
      </div>
    </div>
  );
};

ComponentPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default ComponentPopup;
