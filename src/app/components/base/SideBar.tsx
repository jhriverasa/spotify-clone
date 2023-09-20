import Image from "next/image";

import { SearchIcon, HomeIcon, HomeActiveIcon } from "../svg/Icons";
import Header from "./Header";
import Library from "./Library";

const SideBar = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>

      <div>
        <Library />
      </div>
    </div>
  );
};

export default SideBar;
