import { FaAngleRight, FaCircleCheck } from "react-icons/fa6";

const hero = () => {
  return (
    <main className="bg-green-100 lg:h-[100vh] h-full flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full h-full flex items-center flex-col lg:flex-row lg:p-0 p-6 lg:mt-0 mt-[80px]">
        <div className="flex flex-col space-y-6 lg:justify-center w-[60%] ">
          <h1 className="lg:text-5xl text-3xl font-bold w-full">
            Soluții de creditare personalizate
          </h1>
          <p className="text-md w-full lg:w-[70%] text-gray-500">
            Servicii complete de creditare si crestea sanselor de aprobare
            oferite de o echipa profesionista in domeniul bancar financiar si
            non-bancar.
          </p>
          <button className="w-[12rem] hidden lg:flex items-center justify-center space-x-2 uppercase">
            <span>Obtine Credit</span>
            <FaAngleRight />
          </button>
        </div>
        <div className="flex flex-col justify-end w-[40%] lg:flex-row lg:justify-center relative">
          <img
            className="h-full object-contain lg:w-[100%] lg:max-w-[50vh] w-[35vh]"
            src={require("../assets/bg-5.png")}
            alt="frontimg"
          />
          <div className="absolute top-0 right-[-5%] bg-white pl-3 pr-8 p-2 rounded-md hidden lg:block shadow-md">
            <p className="text-md flex space-x-2 items-center">
              <FaCircleCheck className="fill-green-400" />
              <span className="text-gray-500">Credit Personalizat</span>
            </p>
            <p className="text-sm text-gray-400">test</p>
          </div>

          <div className="absolute bottom-[10%] left-[25%] bg-white pl-3 pr-8 p-2  rounded-md hidden lg:block shadow-md">
            <p className="text-md flex space-x-2 items-center">
              <FaCircleCheck className="fill-green-400" />
              <span className="text-gray-500 "> Credit Rapid</span>
            </p>
            <p className="text-sm text-gray-400">test</p>
          </div>

          <button className="w-[10rem] lg:hidden block">Obtine Credit</button>
        </div>
      </div>
      <div className="bg-green-300 lg:w-fit px-20 w-full mx-auto h-[4rem] lg:rounded-t-lg flex items-center">
        <p className="text-2xl font-bold uppercase">Creditare Rapida</p>
      </div>
    </main>
  );
};

export default hero;
