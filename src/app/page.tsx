import Header from "./components/base/SideBarHeader";
import SideBar from "./components/base/SideBar";
import MainContent from "./components/base/MainContent";
import FooterPlayer from "./components/base/FooterPlayer";

const Home = () => {
  return (
    <div className="container-base flex flex-col h-full">
      <div className="flex">
        <SideBar />
        <MainContent />
      </div>
      <div>
        <FooterPlayer />
      </div>
    </div>
  );
};

export default Home;
