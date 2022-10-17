import React from "react";
import useHackerNew from "../../hooks/useHackerNew";
// import lodash from "lodash";

const HackerNewsWithHook = () => {
  const [state, dispatch] = useHackerNew();

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

export default HackerNewsWithHook;
