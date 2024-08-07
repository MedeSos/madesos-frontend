import { HeaderChange } from "./DashboardUtility";
import { ContentBody, MainContent, BoxContainer } from "./Frame";

export default function MainDashboardBody({ children, headerStatus = false, footer = null }) {
  return (
    <>
      <BoxContainer>
        <ContentBody header={<HeaderChange changes={headerStatus} />} main={<MainContent>{children}</MainContent>} footer={footer} />
      </BoxContainer>
    </>
  );
}
