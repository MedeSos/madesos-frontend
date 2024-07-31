export function AlertMessage({ children, type }) {
  const alertType = type ? "bg-green-200 text-green-800" : "bg-red-400 text-white";
  
  return (
    <>
      <div className={`w-3/4 alert-message px-5 py-3 rounded mb-4 ${alertType} uppercase`}>{children}</div>
    </>
  );
}