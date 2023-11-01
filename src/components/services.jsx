const services = () => {
  const dataCards = [
    {
      img: "",
      title: "Credite de nevoi personale",
      description: "Description 1",
    },
    {
      img: "",
      title: "Refinantari",
      description: "Description 2",
    },
    {
      img: "",
      title: "Credite Imobiliare",
      description: "Description 3",
    },
    {
      img: "",
      title: "Stergere din biroul de credit",
      description: "Description 4",
    },
    {
      img: "",
      title: "credite IMM-uri",
      description: "Description 5",
    },
    {
      img: "",
      title: "Leasing Auto",
      description: "Description 6",
    },
  ];

  return (
    <section className="container mx-auto max-w-7xl px-4">
      <div className="flex flex-col items-center justify-evenly space-y-6 py-5 h-100 lg:h-screen lg:px-0">
        <div>
          <h2 className="text-5xl uppercase text-center">TITLE</h2>
          <p className="text-md text-center">"meme story"</p>
        </div>
        <div className="grid w-full lg:grid-cols-3 lg:gap-6 gap-4 lg:w-full cursor-pointer">
          {dataCards.map((card, index) => (
            <div
              key={index}
              className="bg-green-100 rounded-md h-auto lg:h-[280px] p-3 flex flex-col space-y-4"
            >
              <div className="rounded-lg bg-green-300 h-28 lg:w-full">
                <img src="#" alt="#" />
              </div>
              <div className="flex flex-col justify-around space-y-4">
                <div>
                  <h4 className="text-lg font-bold uppercase">{card.title}</h4>
                  <p className="text-gray-500 text-sm">{card.description}</p>
                </div>
                <button className="text-sm">Vezi Oferta</button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl uppercase text-center">TITLE</h2>
          <p className="text-md text-center">"meme story"</p>
        </div>
      </div>
    </section>
  );
};

export default services;
