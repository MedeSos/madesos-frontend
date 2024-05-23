import { Profile } from "./DashboardUtility";
import MainDashboardBody from "./MainDashboardBody";

export default function UpdateBody({ children }) {
  return (
    <>
      <MainDashboardBody>
        <Profile />
        {children}
      </MainDashboardBody>
    </>
  );
}
