import { FaAngleRight, FaCircleCheck } from "react-icons/fa6";

const hero = () => {
  return (
    <main className="bg-green-100">
      <div className="max-w-7xl mx-auto w-full flex items-center flex-col lg:flex-row h-[82vh] h-100 space-y-3 lg:space-y-0 lg:mt-[70px] mt-[10%] p-3">
        <div className=" flex flex-col flex-1 items-start justify-center space-y-6 ">
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
        <div className="flex items-center flex-col flex-1 space-y-6 lg:px-4 lg:w-[18rem] lg:flex-row lg:justify-end relative">
          <img
            className="w-[100%] h-100 object-contain lg:max-w-[50vh]"
            src={require("../assets/bg-11.png")}
            alt="frontimg"
          />
          <div className="absolute top-0 right-[-5%] px-4 bg-white p-2 w-1/3 rounded-md hidden lg:block shadow-md">
            <p className="text-md flex space-x-2 items-center">
              <FaCircleCheck className="fill-green-400" />
              <span className="text-gray-500">Credit Personalizat</span>
            </p>
            <p className="text-sm text-gray-400">test</p>
          </div>

          <div className="absolute bottom-1/3 left-[45%] bg-white p-2 w-1/3 rounded-md hidden lg:block shadow-md">
            <p className="text-md flex space-x-2 items-center">
              <FaCircleCheck className="fill-green-400" />
              <span className="text-gray-500 "> Credit Rapid</span>
            </p>
            <p className="text-sm text-gray-400">test</p>
          </div>

          <button className="w-[10rem] lg:hidden block">Obtine Credit</button>
        </div>
      </div>
      <div className="bg-green-300 lg:w-2/3 w-full mx-auto h-[7rem] lg:h-5/3 p-3 text-lg text-center relative bottom-0 lg:rounded-t-lg flex justify-center flex-col lg:relative">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est numquam
          corrupti laudantium itaque laboriosam ipsa maiores accusamus eos nulla
          ea.
        </p>
      </div>
    </main>
  );
};

export default hero;
