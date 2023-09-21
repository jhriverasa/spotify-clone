import Image from "next/image";

import { SearchIcon, HomeIcon, HomeActiveIcon } from "../svg/Icons";

const LibListBox = () => {
  return (
    <div className="container-liblistbox flex flex-col bg-background-base rounded-lg pl-2">
      <div className="container-liblistbox-inside flex items-center rounded-md hover:cursor-pointer hover:bg-background-highlight
      active:bg-background-press pl-2 py-2">
        <div className="flex w-12 h-12 mr-4">
          <Image
            className="rounded-md"
            src={"/img/liked-songs-640.png"}
            alt={"Liked songs"}
            
            width={48}
            height={48}
          />
        </div>
        <div>
          <div>Canciones que te gustan</div>
          <div className="text-sm text-text-subdued">Lista • 15 canciones</div>
        </div>
      </div>
    </div>
  );
};

export default LibListBox;
