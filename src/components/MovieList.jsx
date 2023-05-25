import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 900;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 900;
  };
  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] p-2 z-10 cursor-pointer hidden md:block absolute ${
          index_ % 3 == 0 ? "mt-[150px]" : "mt-[80px]"
        }`}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8
    scrollbar-none scroll-smooth pt-4 px-3 pb-4"
      >
        {movieList.map((item) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard key={item} movie={item} />
            ) : (
              <MovieCard key={item} movie={item} />
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] p-2 z-10 right-0 top-0 cursor-pointer hidden md:block absolute ${
          index_ % 3 == 0 ? "mt-[150px]" : "mt-[100px]"
        }`}
      />
    </div>
  );
}

export default MovieList;
