import Header from "./components/base/SideBarHeader";
import SideBar from "./components/base/SideBar";
import MainContent from "./components/base/MainContent";

const Home = () => {
  return (
    <div className="container-base flex">
      <SideBar/>
      <MainContent/>
    </div>
  );
};

export default Home;
