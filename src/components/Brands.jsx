/* eslint-disable react/jsx-key */
import disney from "../assets/images/disney.png";
import pixar from "../assets/images/pixar.png";
import marvel from "../assets/images/marvel.png";
import starwars from "../assets/images/starwars.png";
import national from "../assets/images/national.png";

import disneyvideo from "../assets/videos/disney.mp4";
import pixarvideo from "../assets/videos/pixar.mp4";
import marvelvideo from "../assets/videos/marvel.mp4";
import starwarsvideo from "../assets/videos/star-wars.mp4";
import nationalvideo from "../assets/videos/national-geographic.mp4";

function Brands() {
  const BrandsList = [
    {
      id: 1,
      image: disney,
      video: disneyvideo,
    },
    {
      id: 2,
      image: pixar,
      video: pixarvideo,
    },
    {
      id: 3,
      image: marvel,
      video: marvelvideo,
    },
    {
      id: 4,
      image: starwars,
      video: starwarsvideo,
    },
    {
      id: 5,
      image: national,
      video: nationalvideo,
    },
  ];
  return (
    <div className="flex justify-center gap-2 md:gap-12 p-2 px-5 md:px-16">
      {BrandsList.map((item) => (
        <div className="brand shadow-lg shadow-gray-800 z-[1]">
          <img src={item.image} className="w-full z-[1] opacity-100" alt="" />
        </div>
      ))}
    </div>
  );
}

export default Brands;
