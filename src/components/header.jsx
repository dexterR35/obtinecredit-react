import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import obtLogo from "../assets/logo.png";

const Header = () => {
  let Links = [
    { name: "Acasa", link: "/" },
    { name: "Despre Noi", link: "/" },
    { name: "Oferta", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow fixed top-0 z-20">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex justify-between py-3 md:py-5 md:block">
          <a href="#" className="flex place-items-center space-x-2">
            <img src={obtLogo} alt="test" className="w-9 h-9 object-contain" />
            <span className="text-md text-dark font-bold">Obtine Credit</span>
          </a>
          <div className="md:hidden">
            <button className="p-2 text-2xl" onClick={() => setNavbar(!navbar)}>
              {navbar ? <FaBars /> : <FaBars />}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 pb-3 mt-8 md:flex md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="space-y-5 md:flex md:space-x-6 md:space-y-0">
              {Links.map((link) => (
                <li key={link.name} className="text-lg">
                  <a href={link.link} className="text-gray-800">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 lg:hidden md:hidden">
              <button className="w-full p-2">Vezi Oferta</button>
            </div>
          </div>
        </div>
        <div className="hidden md:inline-block">
          <button>Vezi Oferta</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
