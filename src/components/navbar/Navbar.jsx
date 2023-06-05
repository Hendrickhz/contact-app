
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";


import { useDispatch } from "react-redux";
import Cookies from "js-cookie";



const Navbar = () => {

  const token = Cookies.get("token");
  const auth = token ? true : false;
 

;


 

  // const user = JSON.parse(Cookies.get('user'))

  // console.log(user);
  return (
    <>
      <div className=" flex py-3 bg-gray-300 lg:px-10 px-5 justify-between items-center sticky top-0">
        <h1 className=" text-2xl lg:text-3xl font-semibold select-none cursor-pointer">
          Contactify
        </h1>
        {/* simple button before authentication */}
        {/* <div className={`flex gap-3  lg:gap-5 ${auth ? "hidden" : "flex"}`}>
          <a href={"/login"}>
            <button className="  outline outline-offset-0 outline-gray-300 py-2  px-3 rounded text-color hover:bg-orange-500 hover:text-white duration-300 lg:hover:text-gray-800">
              Login
            </button>
          </a>
         
       
        </div> */}

        {/* After authentication */}
      

      </div>
    </>
  );
};

export default Navbar;
