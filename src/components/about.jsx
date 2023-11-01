const about = () => {
  return (
    <section className="bg-green-100 px-4">
      <div className="container mx-auto h-100 lg:h-screen flex flex-col items-stretch justify-evenly">
        <h2 className="text-4xl font-bold uppercase flex flex-col text-center basis-28 justify-center">
          Cine suntem?
          <span className="text-sm capitalize font-normal text-gray-700">
            Lorem ipsum dolor sit.
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-96 md:w-1/2">
            <img
              src={require("../assets/person1.png")}
              alt="person1"
              className="lg:w-96 lg:block w-48 mx-auto hidden"
            />
          </div>
          <div className="w-full md:w-1/2 bg-white flex items-start flex-col p-4 space-y-3 rounded-[15px] shadow-lg">
            <h3 className="text-xl font-bold">Echipa Racheta</h3>
            <p className="w-3/3">
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
          <div className="block lg:hidden basis-28">
            <ul className="flex items-center h-full space-x-6 text-gray-400 text-md cursor-pointer">
              <li className="flex items-center space-x-1">
                <span>Facebook</span>
              </li>
              <li className="flex items-center space-x-1">
                <span>Instagram</span>
              </li>
              <li className="flex items-center space-x-1">
                <span>Tik-Tok</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-auto lg:h-28 bg-green-00 text-center my-[20px] hidden lg:block bg-green-200 rounded-lg p-6 w-3/4 mx-auto">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            nobis labore, fugiat a excepturi, cum ducimus eos laborum ut quos
            facere possimus perspiciatis odit, magnam laboriosam velit beatae
            architecto neque?
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
