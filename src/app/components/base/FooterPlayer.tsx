"use client";
import Image from "next/image";
import {
  BackPlayerIcon,
  FavoriteIcon,
  ForwardPlayerIcon,
  PlayPlayerIcon,
  RepeatPlayerIcon,
  ShuffleIcon,
} from "../svg/Icons";
import ReactSlider from "react-slider";
import Slider from "../essential/Slider";

const FooterPlayer = () => {
  return (
    <footer className="container-base-footerplayer sticky bottom-0 flex justify-center items-center">
      <div className="container-inside-footerplayer flex flex-1 justify-between items-center px-4 py-2">
        <div className="container-info-footerplayer flex min-w-[180px] w-[30%]">
          <div className="container-info-footerplayer-img flex h-14 w-14 mr-2">
            <Image
              className="rounded-[4px]"
              alt="track image"
              src="https://i.scdn.co/image/ab67616d00004851345dd670c3f57d1e71152ee0"
              width={56}
              height={56}
            />
          </div>
          <div className="flex flex-col justify-center mr-4">
            <div className="text-sm font-normal">Claro de Luna</div>
            <div className="text-[11px] font-light text-text-subdued ">
              Ludwig van Beethoven
            </div>
          </div>
          <div className="flex">
            <a className="link-subtle flex items-center hover:cursor-pointer ">
              <FavoriteIcon fill="currentcolor" />
            </a>
          </div>
        </div>

        <div className="container-controls-footerplayer flex justify-center items-center w-[40%] max-w-[722px]">
          <div className="flex flex-col w-full items-center py-2">
            <div className="flex pb-2">
              <div className="left-player-container flex justify-end   ">
                <a className="link-subtle fast-transition flex items-center px-3">
                  <ShuffleIcon fill="currentcolor" />
                </a>
                <a className="link-subtle fast-transition flex items-center px-3">
                  <BackPlayerIcon fill="currentcolor" />
                </a>
              </div>

              <div className="flex justify-center items-center bg-white w-8 h-8 rounded-full hover:scale-110 mx-2">
                <a className="link-subtle flex items-center">
                  <PlayPlayerIcon fill="black" />
                </a>
              </div>
              <div className="right-player-container flex">
                <a className="link-subtle fast-transition flex items-center px-3">
                  <ForwardPlayerIcon fill="currentcolor" />
                </a>
                <a className="link-subtle fast-transition flex items-center px-3">
                  <RepeatPlayerIcon fill="currentcolor" />
                </a>
              </div>
            </div>
            <div className="flex w-full flex-1 items-center">
              <div className="text-[10px] mr-2 font-light">0:00</div>
              <Slider />
              <div className="text-[10px] ml-2 font-light">5:00</div>
            </div>
          </div>
        </div>
        <div className="container-secondary-controls-footerplayer flex">asedasdsadasdasdasdasdasdasdasdasdasdasd</div>
      </div>
    </footer>
  );
};

export default FooterPlayer;
