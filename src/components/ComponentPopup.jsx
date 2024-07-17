import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ComponentPopup = props => {
  const [show, setShow] = useState(false);
  const [visibility, setVisibility] = useState("invisible opacity-0");
  const closeHandler = e => {
    if (e.target.dataset.svOverlay === "true" || e.target.dataset.svClose === "true") {
      setShow(false);
      props.onClose(false);
    }
  };

  useEffect(() => {
    setShow(props.show);
    setVisibility(props.show ? "visible opacity-100" : "invisible opacity-0");
  }, [props.show]);

  return (
    <>
      {show && (
        <>
          <div onClick={closeHandler} className={`${visibility} fixed inset-0 transition-[opacity_500ms] z-30 overflow-auto`} data-sv-overlay="true">
            <div className="m-[70px_auto] p-5 bg-white rounded-md transition duration-5000 ease-in-out w-[533px] max-h-[1000px] relative">
              {/* <!-- header --> */}
              <section className="absolute top-0 right-0 left-0 h-16 flex justify-between items-center">
                <h2 className="mt-0 text-[#333] p-4">{props.title}</h2>
                <span onClick={closeHandler} className="p-4 transition duration-200 text-3xl font-bold no-underline text-[#333] cursor-pointer z-30" data-sv-close="true">
                  &times;
                </span>
              </section>
              {/* body  */}
              <section className="mt-11">
                <div className="relative overflow-auto max-h-[900px]">{props.children}</div>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};

ComponentPopup.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default ComponentPopup;
