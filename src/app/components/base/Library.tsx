"use client";
import Image from "next/image";

import { AddIcon, LibraryIcon, NextIcon } from "../svg/Icons";
import RoundedButton from "../essential/RoundedButton";
import LibListBox from "../boxes/LibListBox";

const Library = () => {
  return (
    <div className="container-library-base flex flex-col bg-background-base rounded-xl">
      <div className="container-library-header flex justify-between container-wrapper py-2 px-3">
        <div className="px-3 py-1">
          <a className="link-subtle flex items-center pr-3 py-1  hover:cursor-pointer ">
            <LibraryIcon fill="currentcolor" />

            <span className="ml-4">Tu biblioteca</span>
          </a>
        </div>
        <div className="flex px-3 py-1">
          <div className="rounded-full hover:bg-background-highlight mr-1">
            <div className="flex justify-center items-center w-8 h-8 active:bg-background-press active:rounded-full">
              <a className="link-subtle flex items-center hover:cursor-pointer">
                <AddIcon fill="currentcolor" />
              </a>
            </div>
          </div>
          <div className="rounded-full hover:bg-background-highlight">
            <div className="flex justify-center items-center w-8 h-8 active:bg-background-press active:rounded-full">
              <a className="link-subtle flex items-center hover:cursor-pointer">
                <NextIcon fill="currentcolor" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-library-filter-buttons px-3 py-2">
        <div className="flex ">
          <RoundedButton
            isSelected
            label="Listas"
            onClick={(e) => {
              console.log("xdd");
            }}
          />
          <RoundedButton
            isSelected
            label="Álbumes"
            onClick={(e) => {
              console.log("xdd");
            }}
          />
          <RoundedButton
            isSelected
            label="Pódcasts y programas"
            onClick={(e) => {
              console.log("xdd");
            }}
          />
        </div>
      </div>

      <div className="container-library-list thin-scrollbar overflow-y-auto max-h-[28rem] ">
        <div className="container-library-search-header"></div>
        <div className="container-library-list-items shadow-2xl">
          <LibListBox />
          <LibListBox />
          <LibListBox />
          <LibListBox />
          <LibListBox />
          <LibListBox />
          <LibListBox />
          <LibListBox />
          <LibListBox />
        </div>
      </div>
    </div>
  );
};

export default Library;
