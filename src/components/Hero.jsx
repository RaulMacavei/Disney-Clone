import { Link } from "react-router-dom";
import heroimage1 from "/src/assets/images/cta-logo-one.svg";
import heroimage2 from "/src/assets/images/cta-logo-two.png";

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
          <img src={heroimage1} alt="" className="object-contain w-[1000px]" />
          <Link to="/home">
            <button className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]">
              Get all there
            </button>
          </Link>
          <img
            src={heroimage2}
            alt=""
            className="object-contain w-[1000px] pt-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
