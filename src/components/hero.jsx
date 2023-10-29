import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa6";

const hero = () => {
  return (
    <section className="mt-[5rem] md:mt-0">
      <div className="md:max-w-7xl mx-auto flex flex-col md:flex-row md:h-screen items-center w-full p-4 space-y-3 md:space-y-0">
        <div className="flex flex-col flex-1 items-center  md:items-start justify-center space-y-6 md:px-4">
          <h1 className="md:text-6xl text-5xl font-bold w-full md:w-6/6 ">
            Soluții de creditare personalizate
          </h1>
          <p className="text-lg w-full md:w-5/6  text-gray-400">
            Servicii complete de creditare si crestea sanselor de aprobare
            oferite de o echipa profesionista in domeniul bancar financiar si
            non-bancar.
          </p>
          <button className="w-[10rem] hidden md:block">Obtine Credit</button>
          <div className="hidden md:block">
            <ul className="flex space-x-6 text-gray-400 text-sm cursor-pointer">
              <li className="flex items-center space-x-1">
                <FaFacebook />
                <span>Facebook</span>
              </li>
              <li className="flex items-center space-x-1">
                <FaInstagram />
                <span>instagram</span>
              </li>
              <li className="flex items-center space-x-1">
                <FaWhatsapp />
                <span>Whatsapp</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col flex-1 space-y-4 md:px-4 md:w-[18rem] md:flex-row relative">
          <img
            className="w-[70%] h-100 object-contain md:w-[80%]"
            src={require("../assets/bg-6.png")}
            alt="frontimg"
          />
          <div className="absolute top-0 right-20 bg-gray-100 text-gray-400 p-2 w-1/4 text-center text-sm rounded-md hidden md:block">
            <p>Credit Rapid</p>
          </div>
          <div className="absolute bottom-14 left-14 bg-gray-100 text-gray-400 p-2 w-1/4 text-center text-sm rounded-md hidden md:block">
            <p>Credit Personalizat</p>
          </div>
          <button className="w-[10rem] md:hidden block">Obtine Credit</button>
          <div className="md:hidden">
            <ul className="flex space-x-6 text-gray-400 text-sm cursor-pointer">
              <li className="flex items-center space-x-1">
                <FaFacebook />
                <span>Facebook</span>
              </li>
              <li className="flex items-center space-x-1">
                <FaInstagram />
                <span>instagram</span>
              </li>
              <li className="flex items-center space-x-1">
                <FaWhatsapp />
                <span>Whatsapp</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
