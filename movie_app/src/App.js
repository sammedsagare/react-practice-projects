import { useState, useEffect } from "react";
import "./App.css";
import searchIcon from "./assets/search.svg";
import MovieCards from "./MovieCards";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <>
      <div className="app">
        <h1>CinemaPedia</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            src={searchIcon}
            alt="search"
            onClick={() => searchMovies(search)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movies) => (
              <MovieCards movies={movies} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
