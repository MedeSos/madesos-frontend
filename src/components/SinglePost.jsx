export function ModalPopup({ children, customStyle }) {
  return (
    <>
      {/* <!-- modal image --> */}
      <div className={`py-5 w-full ${customStyle} flex`}>{children}</div>
      {/* <!-- modal image end --> */}
    </>
  );
}
