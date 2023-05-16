import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  return (
    <div>
      <HiChevronLeft
        className="hidden md:block absolute text-[30px] mx-8 mt-[155px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className=" hidden md:block absolute text-[30px] mx-8 mt-[155px] right-0 cursor-pointer"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full p-5 md:px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            key={IMAGE_BASE_URL}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full h-[160px] md:h-[310px] object-cover cursor-pointer object-left-top mr-5 rounded-md hover:border-[4px] boder-gray-400 transition-all duration-100 ease-in"
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
