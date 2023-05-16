import "./App.css";
import Brands from "./components/Brands";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="">
      <Header />
      <Slider />
      <Brands />
      <GenreMovieList />
    </div>
  );
}

export default App;
