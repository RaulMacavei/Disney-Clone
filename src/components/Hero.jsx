import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="relative overflow-hidden min-w-[99vw] max-h-[99vh]">
        <img
          src="https://i.imgur.com/6VriQsQ.jpg"
          alt="Background Image"
          className="object-cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8">
          <img
            src="/src/assets/images/cta-logo-one.svg"
            alt=""
            width="600"
            height="150"
            className="object-contain"
          />
          <Link to="/home">
            <button className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]">
              Get all there
            </button>
          </Link>

          <img
            src="/src/assets/images/cta-logo-two.png"
            alt=""
            width="600"
            height="70"
            className="object-contain pt-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
