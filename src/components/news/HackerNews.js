import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
// import lodash from "lodash";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );

  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    setLoading(true);
    if (query !== "") {
      try {
        const response = await axios.get(url);
        setHits(response.data?.hits || []);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setErrorMessage(`An error occurred: ${error}`);
      }
    } else {
      setHits([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4 ">
      <div className="flex mb-5 gap-3">
        <input
          type="text"
          className="border border-gray-200 p-5 transition-all focus:border-green-500 block w-full rounded-lg"
          defaultValue={query}
          placeholder="Typing your keyword..."
          // onChange={lodash.debounce((even) => setQuery(even.target.value), 500)}// giong setTimeout
          onChange={(even) => setQuery(even.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0 hover:opacity-50"
          // onClick={() =>
          //   setQuery(document.querySelector('input[type="text"]').value)
          // }
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          Search
        </button>
      </div>
      {query && loading && (
        <div className="mx-auto my-10 loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-600 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          !errorMessage &&
          hits.length > 0 &&
          hits.map((hit) => {
            if (!hit.title) return null;
            return (
              <h3
                className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-400 hover:text-white"
                key={hit.title || Math.random()}
              >
                {hit.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
