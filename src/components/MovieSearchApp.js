import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import lodash from "lodash";
import LoadingSkeleton from "./loading/LoadingSkeleton";

// https://api.themoviedb.org/3/movie/550?api_key=ae55f04e216bce6e59920baaaaee84b5
// https://api.themoviedb.org/3/search/movie?api_key=ae55f04e216bce6e59920baaaaee84b5&query=''

const MovieSearchApp = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    ` `
  );
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const fetchingMovie = useRef(); //co the viet ham o trong useEffect

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = () => {
    setUrl(
      `https://api.themoviedb.org/3/search/movie?api_key=ae55f04e216bce6e59920baaaaee84b5&query='${query}'`
    );
  };

  fetchingMovie.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (response.data.results) {
        setMovies(response.data.results || []);
        setLoading(false);
      }
      setError("");
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchingMovie.current();
  }, [url]);
  return (
    <div className="p-10">
      <div className="flex gap-x-3 w-full max-w-[500px] mx-auto mb-10">
        <input
          onChange={lodash.debounce(handleInputChange, 500)}
          type="text"
          className="w-full rounded-lg p-5 border border-purple-400 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)]"
          placeholder="Search movies..."
        />
        <button
          onClick={handleClick}
          className="p-5 bg-green-400 text-white rounded-lg hover:shadow-lg"
        >
          Search
        </button>
      </div>
      {error && <div className="text-red-500 text-lg">{error}</div>}
      {loading && (
        <div className="grid grid-cols-3 gap-10">
          <MovieItemsLoading></MovieItemsLoading>
          <MovieItemsLoading></MovieItemsLoading>
          <MovieItemsLoading></MovieItemsLoading>
          <MovieItemsLoading></MovieItemsLoading>
          <MovieItemsLoading></MovieItemsLoading>
          <MovieItemsLoading></MovieItemsLoading>
        </div>
      )}
      {!loading && (
        <div className="grid grid-cols-3 gap-10">
          {movies &&
            movies.length > 0 &&
            movies.map((movie, index) => (
              <MovieItems
                key={movie.id || Math.random()}
                data={movie}
              ></MovieItems> //co the lam giong mgm {...movie}
            ))}
        </div>
      )}
    </div>
  );
};

const MovieItemsLoading = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl flex flex-col">
      <div className="h-[317px] rounded-lg p-3">
        <LoadingSkeleton
          width="100%"
          height="100%"
          radius="8px"
        ></LoadingSkeleton>
      </div>
      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-4 text-black">
          <LoadingSkeleton
            width="100%"
            height="20px"
            radius="8px"
          ></LoadingSkeleton>
        </h3>
        <p className="text-sm mb-6 text-[#999]">
          <LoadingSkeleton
            width="100%"
            height="10px"
            radius="8px"
          ></LoadingSkeleton>
          <div style={{ height: "3px" }}></div>
          <LoadingSkeleton
            width="100%"
            height="10px"
            radius="8px"
          ></LoadingSkeleton>
          <div style={{ height: "3px" }}></div>
          <LoadingSkeleton
            width="100%"
            height="10px"
            radius="8px"
          ></LoadingSkeleton>
        </p>
        <div className="flex gap-x-3 items-center mt-auto">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-sm font-semibold text-[#333]">
            <LoadingSkeleton
              width="60px"
              height="10px"
              radius="8px"
            ></LoadingSkeleton>
          </span>
        </div>
      </div>
    </div>
  );
};

const MovieItems = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl flex flex-col">
      <div className="h-[317px] rounded-lg p-3">
        <img
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt="girl"
          className="h-full w-full rounded-lg hover:shadow-md object-cover"
        />
      </div>
      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-4 text-black">{data.title}</h3>
        <p className="text-sm mb-6 text-[#999]">{data.overview}</p>
        <div className="flex gap-x-3 items-center mt-auto">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-sm font-semibold text-[#333]">
            {data.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieSearchApp;
