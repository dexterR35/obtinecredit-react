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
    <section className="bg-green-100">
      <div className="lg:max-w-7xl mx-auto flex flex-col lg:flex-row lg:h-screen items-center w-full space-y-3 lg:space-y-0">
        <div className="px-4 pt-2 pb-3 flex flex-col flex-1 items-start justify-center space-y-6 h-100 mt-[25%] lg:self-start lg:px-2 lg:h-[65%] lg:mt-[2%]">
          <h1 className="lg:text-6xl text-3xl font-bold w-full lg:w-6/6">
            Soluții de creditare personalizate
          </h1>
          <p className="text-md w-full lg:w-5/6 text-gray-500">
            Servicii complete de creditare si crestea sanselor de aprobare
            oferite de o echipa profesionista in domeniul bancar financiar si
            non-bancar.
          </p>
          <button className="w-[12rem] hidden lg:flex items-center justify-center space-x-2 uppercase">
            <span>Obtine Credit</span>
            <FaAngleRight />
          </button>
        </div>
        <div className="flex items-center flex-col flex-1 space-y-6 lg:px-4 lg:w-[18rem] lg:flex-row lg:justify-center relative">
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

          <div className="absolute bottom-1/2 left-50 bg-white p-2 w-1/3 rounded-md hidden lg:block shadow-md">
            <p className="text-md flex space-x-2 items-center">
              <FaCircleCheck className="fill-green-400" />
              <span className="text-gray-500 "> Credit Rapid</span>
            </p>
            <p className="text-sm text-gray-400">test</p>
          </div>

          <button className="w-[10rem] lg:hidden block">Obtine Credit</button>
        </div>
      </div>
      <div className="bg-green-500 lg:w-1/2 w-full h-[7rem] lg:h-1/6 py-3 relative bottom-[5%] my-[2rem] rounded-e-lg flex justify-between flex-col lg:absolute">
        <div className="lg:h-5 h-2 w-full bg-green-100 p-1"></div>
        <div className="lg:block relative flex justify-center">
          <ul className="lg:px-20 lg:text-md px-2 flex space-x-6 justify-end text-green-100 text-sm cursor-pointer">
            <li className="flex items-center space-x-2">
              <FaFacebook className="text-3xl" />
              <span>Facebook</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaInstagram className="text-3xl" />
              <span>Instagram</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaTiktok className="text-3xl" />
              <span>Tik-Tok</span>
            </li>
          </ul>
        </div>
        <div className="lg:h-5 h-2 w-full bg-green-100 p-1"></div>
      </div>
      {/* <div className="chat-us py-3 px-6 absolute bottom-10 right-20 rounded-xl shadow-md  text-white flex items-center space-x-2 bg-green-500 hover:text-white cursor-pointer">
        <FaWhatsapp className="text-2xl" />
        <span>Whatsapp</span>
      </div> */}
    </section>
  );
};

export default hero;
