import React, { useState } from "react";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navbarMovile = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className="w-full flex items-center justify-between pb-10">
      <img src="/src/images/logo.svg" alt="logo" />
      <button onClick={navbarMovile} className="md:hidden">
        <img src="/src/images/icon-menu.svg" alt="abrir" />
      </button>
      <nav
        className={`flex bg-white max-md:absolute max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:bg-white max-md:w-4/6 max-md:flex-col max-md:p-8 
        max-md:shadow-[0_0_0_100vmax_rgba(0,0,0,0.5)] transition-all duration-300 ease-in ${
          navbarOpen
            ? "max-md:flex max-md:visible max-md:opacity-100"
            : "max-md:invisible max-md:opacity-0"
        }`}
      >
        <button
          onClick={navbarMovile}
          className="md:hidden absolute top-0 right-0 p-6 "
        >
          <img src="/src/images/icon-menu-close.svg" alt="cerrar" />
        </button>
        <ul className="flex gap-10 max-md:flex-col max-md:items-start max-md:justify-center max-md:gap-8 max-md:mt-24">
          <li className="w-full">
            <a href="" className=" hover:text-softOrange ">
              Home
            </a>
          </li>
          <li className="w-full">
            <a href="" className=" hover:text-softOrange ">
              New
            </a>
          </li>
          <li className="w-full">
            <a href="" className=" hover:text-softOrange ">
              Popular
            </a>
          </li>
          <li className="w-full">
            <a href="" className=" hover:text-softOrange ">
              Trending
            </a>
          </li>
          <li className="w-full">
            <a href="" className=" hover:text-softOrange ">
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
