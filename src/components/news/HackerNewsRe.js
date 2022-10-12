import axios from "axios";
import React, { useReducer } from "react";
import { useRef } from "react";
import { useEffect } from "react";
// import lodash from "lodash";

const initialState = {
  hits: [],
  query: "",
  loading: false,
  errorMessage: "",
  url: "",
};

const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_HITS": {
      return { ...state, hits: action.payload };
    }

    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }

    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }

    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }

    case "SET_URL": {
      return { ...state, url: action.payload };
    }

    default:
      break;
  }
};

const HackerNewsRe = () => {
  const [state, dispatch] = useReducer(hackerNewsReducer, initialState);

  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    if (state.query !== "") {
      try {
        const response = await axios.get(state.url);
        dispatch({ type: "SET_HITS", payload: response.data?.hits || [] });
        dispatch({ type: "SET_LOADING", payload: false });
      } catch (error) {
        console.log(error);
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_ERROR", payload: `An error occurred: ${error}` });
      }
    } else {
      dispatch({ type: "SET_HITS", payload: [] });
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4 ">
      <div className="flex mb-5 gap-3">
        <input
          type="text"
          className="border border-gray-200 p-5 transition-all focus:border-green-500 block w-full rounded-lg"
          defaultValue={state.query}
          placeholder="Typing your keyword..."
          // onChange={lodash.debounce((even) => setQuery(even.target.value), 500)}// giong setTimeout
          onChange={(even) =>
            dispatch({ type: "SET_QUERY", payload: even.target.value })
          }
        />
        <button
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0 hover:opacity-50"
          // onClick={() =>
          //   setQuery(document.querySelector('input[type="text"]').value)
          // }
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          disabled={state.loading || state.errorMessage}
          style={{
            backgroundColor: state.loading && "#ccc",
            color: state.loading && "#333",
          }}
        >
          Search
        </button>
      </div>
      {state.query && state.loading && (
        <div className="mx-auto my-10 loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!state.loading && state.errorMessage && (
        <p className="text-red-600 my-5">{state.errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          !state.errorMessage &&
          state.hits.length > 0 &&
          state.hits.map((hit) => {
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

export default HackerNewsRe;
