import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const about = () => {
  return (
    <section className="bg-green-300 lg:h-[48rem] h-full flex justify-around">
      <div className="mb-[15%]">
        <div className="text-5xl font-bold uppercase text-center mx-auto mb-10">
          <p className="pt-[8%]">Cine Suntem !?</p>
          <p className="text-[1.2rem] capitalize font-normal text-gray-700">
            Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="container mx-auto flex flex-col items-stretch h-full">
          <div className="flex flex-col lg:flex-row items-center flex-1">
            <div className="w-48 lg:w-[50%]">
              <img
                src={require("../assets/bg-11.png")}
                alt="person1"
                className="lg:w-[40%] lg:block w-48 mx-auto hidden"
              />
            </div>

            <div className="mx-auto w-full lg:w-[50%]">
              <div className="bg-green-100 p-5 rounded-lg space-y-3 lg:my-0 my-6">
                <h3 className="text-2xl font-bold">Echipa Racheta</h3>
                <p className="w-full text-[18px] text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                  soluta itaque laboriosam officiis odit. Tempore saepe enim
                  nemo. Voluptas, modi Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Distinctio inventore architecto explicabo
                  enim repudiandae minima quis qui voluptatibus accusamus minus.
                </p>
                <h3 className="text-xl font-bold">De ce Noi!?</h3>
                <p className="text-[16px] text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci odio laudantium nulla itaque quam architecto tempore
                  est quibusdam dolorum vero!
                </p>
              </div>

              <div className="w-full py-6 lg:py-4 bg-green-800 lg:rounded-b-lg">
                <ul className="lg:text-md flex justify-around text-green-100 text-sm cursor-pointer">
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
        </div>
      </div>
    </section>
  );
};

export default about;
