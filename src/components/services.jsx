const services = () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-3 h-100 lg:h-screen lg:px-0">
      <h2 className="text-5xl uppercase text-center">Ce Oferim</h2>
      <p className="text-md text-center mb-4">"meme story "</p>
      <div className=" gap-4 place-items-strech mx-auto grid lg:grid-cols-3 lg:mx-w-7xl lg:mx-auto">
        <div className="bg-blue-300 rounded-md h-40 lg:h-72">1</div>
        <div className="bg-blue-400 rounded-md h-40 lg:h-72">2</div>
        <div className="bg-blue-500 rounded-md h-40 lg:h-72">3</div>
        <div className="bg-blue-600 rounded-md h-40 lg:h-72">4</div>
        <div className="bg-blue-700 rounded-md h-40 lg:h-72">5</div>
        <div className="bg-blue-800 rounded-md h-40 lg:h-72">6</div>
      </div>
    </section>
  );
};

export default services;
