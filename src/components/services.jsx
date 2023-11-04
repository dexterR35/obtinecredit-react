import carsImg from "../assets/person1.png";

const services = () => {
  const dataCards = [
    {
      img: carsImg,
      title: "Credite de nevoi personale",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perspiciatis ipsum repellendus aspernatur iusto numquam aliquid cumque optio illo! Temporibus!",
    },
    {
      img: carsImg,
      title: "Refinantari",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perspiciatis ipsum repellendus aspernatur iusto numquam aliquid cumque optio illo! Temporibus!",
    },
    {
      img: carsImg,
      title: "Credite Imobiliare",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perspiciatis ipsum repellendus aspernatur iusto numquam aliquid cumque optio illo! Temporibus!",
    },
    {
      img: carsImg,
      title: "Stergere din biroul de credit",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perspiciatis ipsum repellendus aspernatur iusto numquam aliquid cumque optio illo! Temporibus!",
    },
    {
      img: carsImg,
      title: "credite IMM-uri",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perspiciatis ipsum repellendus aspernatur iusto numquam aliquid cumque optio illo! Temporibus!",
    },
    {
      img: carsImg,
      title: "Leasing Auto",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perspiciatis ipsum repellendus aspernatur iusto numquam aliquid cumque optio illo! Temporibus",
    },
  ];
  return (
    <section className="mx-auto bg-green-100 px-3 h-full">
      <div className="container mx-auto flex flex-col items-center justify-start lg:px-0">
        <div className="mb-[6%] bg-green-300 lg:w-fit px-32 w-full mx-auto h-[4rem] lg:rounded-b-lg flex items-center">
          <h2 className="text-2xl uppercase text-center w-full font-bold">
            Ce facem !?
          </h2>
        </div>
        <div className="flex flex-row">
          <div className="bg-green-100 p-5 rounded-lg space-y-3 lg:my-0 my-6 max-w-[30%]">
            <h3 className="text-2xl font-bold">Echipa Racheta</h3>
            <p className="w-full text-[18px] text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              soluta itaque laboriosam officiis odit. Tempore saepe enim nemo.
              Voluptas, modi Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Distinctio inventore architecto explicabo enim repudiandae
              minima quis qui voluptatibus accusamus minus.
            </p>
            <h3 className="text-xl font-bold">De ce Noi!?</h3>
            <p className="text-[16px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              odio laudantium nulla itaque quam architecto tempore est quibusdam
              dolorum vero!
            </p>
            <h3 className="text-xl font-bold">De ce Noi!?</h3>
            <p className="text-[16px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              odio laudantium nulla itaque quam architecto tempore est quibusdam
              dolorum vero!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {dataCards.map((card, index) => (
              <div className="flex flex-col bg-white rounded-md p-4 lg:max-w-[25rem] md:max-w-[30rem] max-w-[95%] mx-auto h-full">
                <div
                  key={index}
                  className="flex flex-col gap-4 h-full justify-around"
                >
                  <div className="rounded-lg w-full h-[30%] flex flex-row items-center justify-between">
                    <img
                      src={card.img}
                      alt={card.img}
                      className="w-[30%] h-[100%] object-contain pt-2 "
                    />
                    <h4 className="text-md w-[60%] h-[70%] px-4 text-center rounded-s-lg bg-green-100 leading-5 font-bold uppercase flex items-center">
                      {card.title}
                    </h4>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <p className="text-gray-500 text-sm">{card.description}</p>
                  </div>
                  <button className="text-sm ">Vezi Oferta</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
