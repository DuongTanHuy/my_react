import axios from "axios";
import { useEffect, useReducer, useRef } from "react";

export default function useHackerNew() {
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

  const [state, dispatch] = useReducer(hackerNewsReducer, initialState);

  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    if (isMounted) {
      if (state.query !== "") {
        try {
          const response = await axios.get(state.url);
          dispatch({ type: "SET_HITS", payload: response.data?.hits || [] });
          dispatch({ type: "SET_LOADING", payload: false });
        } catch (error) {
          console.log(error);
          dispatch({ type: "SET_LOADING", payload: false });
          dispatch({
            type: "SET_ERROR",
            payload: `An error occurred: ${error}`,
          });
        }
      } else {
        dispatch({ type: "SET_HITS", payload: [] });
        dispatch({ type: "SET_LOADING", payload: false });
      }
    }
  };

  const isMounted = useRef(true); // fix loi bat dong bo

  useEffect(() => {
    handleFetchData.current();
    return () => (isMounted.current = false); // fix loi bat dong bo
  }, [state.url]);

  return {
    state,
    dispatch,
  }
}
