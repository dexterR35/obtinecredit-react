import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaAngleRight,
  FaCircleCheck,
  FaTiktok,
} from "react-icons/fa6";

const about = () => {
  return (
    <section className="bg-red-400">
      <div className=" mx-auto flex flex-col items-stretch justify-evenly lg:h-[100vh] h-100">
        <h2 className="text-5xl font-bold uppercase flex flex-col text-center justify-center">
          Cine suntem?
          <p className="text-[1.2rem] capitalize font-normal text-gray-700">
            Lorem ipsum dolor sit.
          </p>
        </h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-48 lg:w-1/2">
            <img
              src={require("../assets/bg-4.png")}
              alt="person1"
              className="lg:w-96 lg:block w-48 mx-auto hidden"
            />
          </div>
          <div className="w-full lg:w-1/3 bg-green-500 flex items-start flex-col p-4 space-y-3 rounded-s-md">
            <h3 className="text-xl font-bold">Echipa Racheta</h3>
            <p className="w-3/4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              soluta itaque laboriosam officiis odit. Tempore saepe enim nemo.
              Voluptas, modi Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Distinctio inventore architecto explicabo enim repudiandae
              minima quis qui voluptatibus accusamus minus.
            </p>
            <h3 className="text-xl font-bold">De ce Noi!?</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
            <button>Aplica aici</button>
          </div>
        </div>

        <div className="bg-green-500 flex justify-center flex-col mx-auto w-full h-[7rem] lg:h-5/3 relative bottom-0 rounded-lg">
          <div className="lg:flex relative flex justify-center items-center">
            <ul className="lg:text-md px-2 flex space-x-6 justify-end text-gray-600 text-sm cursor-pointer">
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
        </div>
      </div>
    </section>
  );
};

export default about;
