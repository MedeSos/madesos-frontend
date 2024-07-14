import { Profile, AddPost } from "./DashboardUtility";
import MainDashboardBody from "./MainDashboardBody";

export default function ProfilePages() {
  return (
    <>
      <MainDashboardBody headerStatus={true} footer={<AddPost />}>
        <Profile changes={true} />
        <ProfilePage />
      </MainDashboardBody>
    </>
  );
}
function ProfilePage() {
  return (
    <>
      {/* <!-- post upload box --> */}
      <div className="p-4 bg-secondary mt-5 rounded-xl">
        <h4 className="text-2xl font-semibold my-3 mb-5 tracking-widest">
          Profile Details
        </h4>

        <div className="container ml-4">
          <span className="flex align-baseline">
            <h4 className="mr-1">Nama Panggilan:</h4>
            <p className="">Sakti</p>
          </span>
          <hr className="border-black border-r-2 my-1" />
          <span className="flex align-baseline">
            <h4 className="mr-1">Status:</h4>
            <p className="">Single</p>
          </span>
          <hr className="border-black border-r-2 my-1" />
          <span className="flex align-baseline">
            <h4 className="mr-1">Email:</h4>
            <p className="">prabowosakti2023@gmail.com</p>
          </span>
          <hr className="border-black border-r-2 my-1" />
          <span className="">
            <h4 className="mr-1">Deskripsi:</h4>
            <p className="">
              Halo, perkenalkan saya prabowo sakti, saya merupakan seorang front
              end developer dan berencana akan menjadi full-stack developer,
              dengan mempelajari backend pada awal tahun 2026
            </p>
          </span>
        </div>
      </div>
      {/* <!-- post upload box end --> */}
    </>
  );
}
