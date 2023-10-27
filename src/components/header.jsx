import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  let Links = [
    { name: "Acasa", link: "/" },
    { name: "Despre Noi", link: "/" },
    { name: "Oferta", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold text-dark">LOGO</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 text-2xl rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <FaBars /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-5 md:flex md:space-x-6 md:space-y-0">
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-lg md:my-0 my-4">
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-gray-400 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:hidden">
              <button
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-white bg-green-400 rounded-md shadow hover:bg-gray-100"
              >
                Vezi Oferta
              </button>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <button
            href="javascript:void(0)"
            className="px-4 py-2 text-white bg-green-400 rounded-md shadow hover:bg-gray-100"
          >
            Vezi Oferta
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
