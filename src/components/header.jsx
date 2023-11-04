import React, { Fragment, useState } from "react";
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
    <Fragment>
      <nav className="w-full bg-green-100 fixed top-0 z-20 p-3">
        <div className="container flex justify-between h-full px-4 mx-auto lg:items-center">
          <div className="flex justify-between">
            <a href="#" className="inline-flex items-center">
              <img
                src={obtLogo}
                alt="test"
                className="w-9 h-9 object-contain"
              />
              <span className="text-lg text-gray-600 font-bold">
                OBTINE CREDIT
              </span>
            </a>
            <div className="lg:hidden">
              <button
                className="p-2 text-2xl"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <FaBars /> : <FaBars />}
              </button>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 pb-3 mt-8 lg:flex lg:pb-0 lg:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="space-y-5 lg:flex lg:space-x-6 lg:space-y-0">
                {Links.map((link) => (
                  <li key={link.name} className="p-2 px-3 hover:bg-green-400">
                    <a href={link.link} className="text-gray-800 text-md">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-5 lg:hidden lg:hidden">
                <button className="w-full p-2">Vezi Oferta</button>
              </div>
            </div>
          </div>
          <div className="hidden lg:inline-block">
            <button>Vezi Oferta</button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
