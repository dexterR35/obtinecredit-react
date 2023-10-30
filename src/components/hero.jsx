import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaAngleRight,
  FaCircleCheck,
  FaTiktok,
} from "react-icons/fa6";

const hero = () => {
  return (
    <section className="mt-[5rem] lg:mt-0">
      <div className="lg:max-w-7xl mx-auto flex flex-col lg:flex-row lg:h-screen items-center w-full p-4 space-y-3 lg:space-y-0">
        <div className="flex flex-col flex-1 items-center  lg:items-start justify-center space-y-6 lg:px-4 lg:mb-20">
          <h1 className="lg:text-6xl text-5xl font-bold w-full lg:w-6/6 ">
            Soluții de creditare personalizate
          </h1>
          <p className="text-lg w-full lg:w-5/6  text-gray-400">
            Servicii complete de creditare si crestea sanselor de aprobare
            oferite de o echipa profesionista in domeniul bancar financiar si
            non-bancar.
          </p>
          <button className="w-[12rem] hidden lg:flex items-center justify-center space-x-2 uppercase">
            <span>Obtine Credit</span>
            <FaAngleRight />
          </button>
          <div className="hidden lg:block">
            <ul className="flex space-x-6 text-gray-400 text-md cursor-pointer">
              <li className="flex items-center space-x-1">
                <FaFacebook />
                <span>Facebook</span>
              </li>
              <li className="flex items-center space-x-1">
                <FaInstagram />
                <span>Instagram</span>
              </li>
              <li className="flex items-center space-x-1">
                <FaTiktok />
                <span>Tik-Tok</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col flex-1 space-y-4 lg:px-4 lg:w-[18rem] lg:flex-row relative">
          <img
            className="w-[70%] h-100 object-contain lg:w-[80%]"
            src={require("../assets/bg-11.png")}
            alt="frontimg"
          />
          <div className="absolute top-0 right-10 px-4 bg-white p-2 w-1/3 rounded-md hidden lg:block shadow-md">
            <p className="text-md flex space-x-2 items-center">
              <FaCircleCheck className="fill-green-400" />
              <span className="text-gray-500">Credit Personalizat</span>
            </p>
            <p className="text-sm text-gray-400">test</p>
          </div>

          <div className="absolute bottom-50 left-50 bg-white  p-2 w-1/3 rounded-md hidden lg:block shadow-md">
            <p className="text-md flex space-x-2 items-center">
              <FaCircleCheck className="fill-green-400" />
              <span className="text-gray-500 "> Credit Rapid</span>
            </p>
            <p className="text-sm text-gray-400">test</p>
          </div>
          <button className="w-[10rem] lg:hidden block">Obtine Credit</button>
          <div className="lg:hidden">
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
                <span>Tik-Tok</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="chat-us py-3 px-6 absolute bottom-10 right-20 rounded-xl shadow-md  text-white flex items-center space-x-2 bg-green-500 hover:text-white cursor-pointer">
        <FaWhatsapp className="text-2xl" />
        <span>Whatsapp</span>
      </div> */}
    </section>
  );
};

export default hero;
