import BgImage from "../assets/bg.jpg";

const hero = () => {
  return (
    <section className="mt-[60px]">
      <div className="container mx-auto h-100 md:h-screen pt-4 bg-green-100">
        <div className="flex flex-col md:flex-row p-2 text-dark">
          <div className="p-2 w-full md:w-3/5 bg-slate-400">
            <h1 className="text-2xl md:text-4xl uppercase ">
              Lorem ipsum dolor sit amet.
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, hic.
            </p>
          </div>
          <div className="p-2 w-full md:w-2/5 bg-slate-200">
            <img
              src={BgImage}
              alt="bg"
              className="w-100 h-100 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
