import { NavLink } from "react-router-dom";

export default function MainMenu(){
  return (
    <>
      <div className="flex flex-col ">
        <NavLink to="/" className="no-underline py-3 px-5 border-b-2 border-neutral-300 hover:bg-secondary hover:rounded-full">
          Dashboard
        </NavLink>
        <NavLink to="/profile" className="no-underline py-3 px-5 border-b-2 border-neutral-300 hover:bg-secondary hover:rounded-full">
          Setting
        </NavLink>
        <NavLink to="/logout" className="no-underline py-3 px-5 border-b-2 border-neutral-300 hover:bg-secondary hover:rounded-full">
          Log Out
        </NavLink>
      </div>
    </>
  );
}