import React from "react";

const Header = ({changePage}) => {
  return (
    <nav className="flex flex-wrap items-center justify-center p-6 bg-teal-500">
      <div className="flex items-center flex-shrink-0 text-white">
        <span className="mr-6 text-xl font-semibold tracking-tight cursor-pointer hover:text-indigo-600" onClick={()=>{changePage('Home')}}>Home</span>
        <span className="text-xl font-semibold tracking-tight cursor-pointer hover:text-indigo-600" onClick={()=>{changePage('Contact')}}>Contact Us</span>
      </div>
    </nav>
  );
};

export default Header;
