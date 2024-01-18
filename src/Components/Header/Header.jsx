import React from "react";
import logo from "../../Netflix.png";
import { Link } from "react-router-dom";
import { IoSearchSharp  } from "react-icons/io5";

const Header = () => {

  return (
    <>
      <div className="flex-wrap w-full h-15 bg-black flex text-white items-center justify-between px-5">
       <Link to="/"> <img className="w-28" src={logo} alt="Netflix" /> </Link>
        <ul className="flex gap-10 w-4/5 font-semibold ">
          <Link to="/TV-Show">TV Shows</Link>
          <Link to="/Movies">Movies</Link>
          <Link to="/Recently-Added">Recently Added</Link>
          <Link to="/My-List"> My List</Link>
        </ul>
        
        <IoSearchSharp className="hover:text-gray-400" />
      </div>
    </>
  );
};

export default Header;
