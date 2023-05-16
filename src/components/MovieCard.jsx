const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <section className="hover:scale-110 transition-all duration-150">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in"
        alt=""
      />
      <h2 className="w-[110px] md:w-[260px] mt-2 font-semibold">
        {movie.title}
      </h2>
    </section>
  );
}

export default MovieCard;
