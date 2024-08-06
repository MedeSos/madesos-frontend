import { createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children, user, setUser, posts, setPosts, images, setImages, videos, setVideos }) => (
  <UserContext.Provider value={{ user, setUser, posts, setPosts, images, setImages, videos, setVideos }}>{children}</UserContext.Provider>
);

export function useUser() {
  return useContext(UserContext);
}

export default UserContext;
