import React from "react";
import Intro from "./components/Intro";
import FetchAPI from "./components/FetchAPI";
import JobButton from "./components/JobButton";
import { useReducer } from "react";
import SearchBar from "./components/SearchBar";

const NEXT = "NEXT";
const BACK = "BACK";
const SEARCH = "SEARCH";

const reducer = (state, action) => {
  switch (action.type) {
    case NEXT:
      console.log("next");
      return {
        ...state,
        page: state.page + 1,
      };

    case BACK:
      console.log("back");
      return {
        ...state,
        page: state.page - 1,
      };
    case SEARCH:
      console.log("search");
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
      };

    default:
      return state;
  }
};

function App() {
  const pageNumber = {
    page: 1,
    searchQuery: null,
  };
  const [state, dispatch] = useReducer(reducer, pageNumber);

  function nextPage() {
    dispatch({
      type: NEXT,
    });
  }
  function prevPage() {
    dispatch({
      type: BACK,
    });
  }
  function searchJob(searchQuery) {
    dispatch({
      type: SEARCH,
      payload: { searchQuery: searchQuery },
    });
  }

  return (
    <div
      style={{
        backgroundColor: "#72DDF7",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#F4F4ED",
          borderRadius: "1rem",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "1px 1px 1px 1px gray",
        }}
      >
        <Intro inputData={{ ...state }} />
        <SearchBar searchJob={searchJob} />
        <FetchAPI inputData={{ ...state }} />
        <JobButton nextPage={nextPage} prevPage={prevPage} />
      </div>
    </div>
  );
}

export default App;
