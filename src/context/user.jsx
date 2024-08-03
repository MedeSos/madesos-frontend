import { createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children, user, setUser }) => (
  <UserContext.Provider value={{ user, setUser }}>
    {children}
  </UserContext.Provider>
);

export function useUser() {
  return useContext(UserContext);
}

export default UserContext;
