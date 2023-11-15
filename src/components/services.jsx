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
    <section className="md:w-5/6 mx-auto bg-green-100">
      <div className="bg-green-500 w-full mx-auto h-[5rem] flex items-center flex-col space-y-2">
        <h2 className="text-2xl uppercase text-center w-full font-bold">
          Ce facem !?
        </h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum
          rem nulla aliquam perferendis quae nihil iusto dolore dignissimos
          sunt!
        </h4>
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="mx-auto grid grid-cols-3 gap-5">
          {dataCards.map((card, index) => (
            <div className="flex flex-col bg-white rounded-md p-4 lg:max-w-[25rem] md:max-w-[30rem] max-w-[100%] mx-auto h-full">
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
                  <h4 className="text-md w-[60%] h-[70%] px-4 text-center rounded-s-lg bg-green-300 leading-5 font-bold uppercase flex items-center">
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
    </section>
  );
};

export default services;
