import Image from "next/image";

import { SearchIcon, HomeIcon, HomeActiveIcon } from "../svg/Icons";

const SideBarHeader = () => {
  return (
    <div className="container-base flex flex-col bg-background-base rounded-xl">
      <div className="container-wrapper py-2 px-3">
        <div className="px-3 py-1">
          <a className="link-subtle flex items-center pr-3 py-1  hover:cursor-pointer ">
            <HomeIcon fill="currentcolor" />

            <span className="ml-6">Inicio</span>
          </a>
        </div>
        <div className="px-3 py-1">
          <a className="link-subtle flex items-center pr-3 py-1 hover:cursor-pointer ">
            <SearchIcon fill="currentcolor" />
            <span className="ml-6">Buscar</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBarHeader;
