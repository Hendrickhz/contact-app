import { Badge } from "@mantine/core";
import React from "react";
import { AiOutlinePlus ,AiFillHome} from "react-icons/ai";
import { BsFillPersonFill, BsTrash } from "react-icons/bs";
import {
  MdRecentActors,
  MdOutlineFavorite,
  MdOutlineAutoFixHigh,
} from "react-icons/md";

import "./Sidebar.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const contactsData = useSelector((state) => state.contactSlice.contacts);
  const favorite = useSelector((state) => state.contactSlice.favorite);



  return (
    <>
      <div className=" w-fit h-[80vh] lg:h-[85vh] flex flex-col py-5 gap-5 lg:gap-10 fixed ">
        <div className=" w-full px-0 lg:px-2 flex">
            side bar
          {/* <div className=" flex items-center gap-3 shadow-xl bg-orange-100 text-xl py-2 px-5 justify-center rounded-full" onClick={() => {
             nav('/contacts/create')
          }}>
            <AiOutlinePlus size={"1.5rem"} />
            <button className="">Create contact</button>
          </div> */}
        </div>
        {/* <div className=" w-full  lg:px-0">
          <a
            href={"/"}
            className="flex items-center justify-between rounded-full text-md py-2 lg:rounded-none lg:rounded-e-full px-5 menu_hover"
          >
            <div className="flex gap-5 items-center">
              <AiFillHome />
              <button>Home</button>
            </div>
          </a>
          <a
            href={"/dashboard"}
            className={
              "flex items-center justify-between rounded-full text-md py-2 lg:rounded-none lg:rounded-e-full px-5 menu_hover"
            }
          >
            <div className="flex gap-5 items-center">
              <BsFillPersonFill />
              <button>Contacts</button>
            </div>
            <Badge color="yellow">{contactsData?.length}</Badge>
          </a>
          <a
            href={"/recently_search"}
            className="flex items-center justify-between rounded-full text-md py-2 lg:rounded-none lg:rounded-e-full px-5 menu_hover"
          >
            <div className="flex gap-5 items-center">
              <MdRecentActors />
              <button>Recently visit</button>
            </div>
          </a>
          <a
            href={"/favourite"}
            className="flex items-center justify-between rounded-full text-md py-2 lg:rounded-none lg:rounded-e-full px-5 menu_hover"
          >
            <div className="flex gap-5 items-center">
              <MdOutlineFavorite />
              <button>Favourite</button>
            </div>
            <Badge color="yellow">{favorite?.length}</Badge>
          </a>
        </div>
        <div className=" w-full"> */}
          <h1 className=" text-xl px-5 py-2 font-semibold">Fix and manage</h1>
          <a
            href={"/Merge_fix"}
            className="flex items-center justify-between rounded-full text-md py-2 lg:rounded-none lg:rounded-e-full px-5 menu_hover"
          >
            <div className="flex gap-5 items-center">
              <MdOutlineAutoFixHigh />
              <button>Merge and fix</button>
            </div>
          </a>
          <a
            href={"/trash"}
            className="flex items-center justify-between rounded-full text-md py-2 lg:rounded-none lg:rounded-e-full px-5 menu_hover"
          >
            <div className="flex gap-5 items-center">
              <BsTrash />
              <button>Bin</button>
            </div>
          </a>
        {/* </div> */}
      </div>
    </>
  );
};

export default Sidebar;
