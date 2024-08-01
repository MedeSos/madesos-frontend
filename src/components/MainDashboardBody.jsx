import { HeaderChange } from "./DashboardUtility";
import { ContentBody, MainContent, BoxContainer } from "./Frame";
import { useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../context/user";

export default function MainDashboardBody({ children, headerStatus = false, footer = null }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    refreshUser();
  }, [user]);

  async function refreshUser() {
    try {
      const id = localStorage.getItem("id");
      const response = await axios.get(`/v1/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const newuser = await response.data.data;
      setUser(newuser);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <UserContext.Provider value={user}>
        <BoxContainer>
          <ContentBody header={<HeaderChange changes={headerStatus} />} main={<MainContent>{children}</MainContent>} footer={footer} />
        </BoxContainer>
      </UserContext.Provider>
    </>
  );
}
