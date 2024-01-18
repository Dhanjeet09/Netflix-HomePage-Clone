import React, { useEffect, useState } from "react";
// import logo from "../../../The-Marvels.jpg";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const url = "https://api.themoviedb.org/3/";
const apiKey = "?api_key=b9779d03257871776d31797fa3b60bdd";
const imgUrl = "https://image.tmdb.org/t/p/original";

const popular = "tv/popular";
const topRated = "tv/top_rated";
const nowPlaying = "movie/now_playing";
const upcoming = "movie/upcoming";

const Card = ({ img }) => (
  <img
    className="w-[120px] px-1  hover:scale-110 hover:transition-all "
    src={img}
    alt="image"
  />
);

const Row = ({ title, arr = [] }) => (
  <>
    <div className="pl-5 w-full h-[210px]  bg-black text-cyan-50">
      <h2 className="py-2 font-bold">{title}</h2>

      <div className="flex -ml-1 overflow-x-auto  overflow-y-hidden">
        {arr.map((item, index) => {
          return <Card key={index} img={`${imgUrl}/${item.poster_path}`} />;
        })}
      </div>
    </div>
  </>
);
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const [TopRated, setTopRated] = useState([]);
  const [NowPlaying, setNowPlaying] = useState([]);
  const [Upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchPopular = async (index) => {
      const {
        data: { results },
      } = await axios.get(`${url}${popular}${apiKey}`);

      setPopularMovies(results);
    };
    const fetchTopRated = async (index) => {
      const {
        data: { results },
      } = await axios.get(`${url}${topRated}${apiKey}`);

      setTopRated(results);
    };
    const fetchNowPlaying = async (index) => {
      const {
        data: { results },
      } = await axios.get(`${url}${nowPlaying}${apiKey}`);

      setNowPlaying(results);
    };

    const fetchUpcomingMovies = async (index) => {
      const {
        data: { results },
      } = await axios.get(`${url}${upcoming}${apiKey}`);

      setUpcoming(results);
    };

    fetchPopular();
    fetchTopRated();
    fetchNowPlaying();
    fetchUpcomingMovies();
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            backgroundImage: popularMovies[15]
              ? `url(${`${imgUrl}${popularMovies[15].poster_path}`})`
              : "rgb(16,16,16)",
          }}
          className="bg-no-repeat bg-center bg-cover w-full h-[350px]  text-cyan-50  	"
        >
          {popularMovies[15] && (
            <h1 className="font-bold pt-32 w-1/3 pl-5 text-5xl uppercase">
              {popularMovies[15].original_name}
            </h1>
          )}
          {popularMovies[15] && (
            <p className="w-3/5 pt-2 pl-5 tracking-[.1px]">
              {popularMovies[15].overview}
            </p>
          )}
          <div className="flex">
            <button className="ml-5 mt-2 flex items-center justify-center gap-3 w-28 h-10 text-black hover:bg-gray-300/100 bg-white  font-bold ">
              <FaPlay className="text-black/80  " />
              Play
            </button>
            <button className="ml-5 mt-2 flex items-center justify-center gap-3 w-28 h-10 hover:bg-black/30 bg-gray-100/50 font-bold">
              <AiOutlinePlus className="text-2xl" />
              My List
            </button>
          </div>
        </div>
        <Row title={"Popular on Netflix"} arr={popularMovies} />
        <Row title={"Upcoming on Netflix"} arr={Upcoming} />
        <Row title={"NowPlaying on Netflix"} arr={NowPlaying} />
        <Row title={"TopRated on Netflix"} arr={TopRated} />
      </div>
    </>
  );
};

export default Home;
