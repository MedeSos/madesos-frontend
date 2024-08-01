export function AlertMessage({ children, type,style="" }) {
  const alertType = type ? "bg-green-200 text-green-800" : "bg-red-400 text-white";
  
  return (
    <>
      <div className={`${style} alert-message px-5 py-3 rounded mb-4 ${alertType} uppercase`}>{children}</div>
    </>
  );
}