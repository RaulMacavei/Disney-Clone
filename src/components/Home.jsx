import Brands from "./Brands";
import GenreMovieList from "./GenreMovieList";
import Header from "./Header";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Brands />
      <GenreMovieList />
    </div>
  );
};

export default Home;
