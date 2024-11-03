import dfood from "../../assets/1.png";

const Hero = () => {
  return (
    <section className="hero py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left pt-24 pb-10 md:p-0">
          <h1 className="text-3xl font-semibold mb-5">
            Delicious Food Waiting For you
          </h1>
          <p className="text-gray-500 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ad a,
            nesciunt esse mollitia temporibus eaque similique dolore unde
            accusantium?
          </p>
          <div className="flex justify-center md:justify-start items-center gap-4">
            <button className="btn-primary">Food Menu</button>
            <button className="btn-secondary">Book Table</button>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex flex-col justify-center">
          <img
            className="animate-spin-slow img-shadow w-[400px] mx-auto"
            src={dfood}
            alt="food"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
