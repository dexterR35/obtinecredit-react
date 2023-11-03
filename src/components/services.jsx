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
    <section className="mx-auto bg-green-200 px-3">
      <div className="container mx-auto flex flex-col items-center justify-center h-100 lg:h-screen lg:px-0">
        <div className="">
          <h2 className="text-5xl uppercase text-center">TITLE</h2>
          <p className="text-md text-center">"meme story" </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          {dataCards.map((card, index) => (
            <div className="flex flex-col bg-white rounded-md px-3 py-4 space-y-4 max-w-[22rem]">
              <div key={index} className="flex flex-row  gap-4 lg:flex-col">
                <div className="rounded-lg bg-green-300 w-full">
                  <img
                    src={card.img}
                    alt={card.img}
                    className="w-[50%] h-[100%] object-contain px-3 mx-auto"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <h4 className="text-xl leading-5 font-bold uppercase">
                    {card.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{card.description}</p>
                </div>
              </div>
              <button className="text-sm ">Vezi Oferta</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default services;
