import Image from "next/image";

import { SearchIcon, HomeIcon, HomeActiveIcon } from "../svg/Icons";
import SideBarHeader from "./SideBarHeader";
import Library from "./Library";

const SideBar = () => {
  return (
    <div className="pl-1 pr-2">
      <div className="py-2">
        <SideBarHeader />
      </div>

      <div>
        <Library />
      </div>
    </div>
  );
};

export default SideBar;
