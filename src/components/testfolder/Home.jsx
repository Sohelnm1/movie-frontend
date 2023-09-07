import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const handleapi = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        );
        setMovie(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    handleapi();
  }, []);

  console.log(movie);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/home",
        movie
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log(movie);
  };

  return (
    <div>
      <h1>Movies</h1>

      <div className=" d-flex flex-wrap  justify-content-center ">
        {movie.map((ele) => (
          <div className="card" key={ele.id}>
            <img
              className="card-img"
              src={`https://image.tmdb.org/t/p/original/${ele.poster_path}`}
              alt="Card  cap"
            />
            <div className="card-body">
              <h5 className="card-title">{ele.original_title}</h5>
              <p className="card-text">
                {ele.vote_average}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.625em"
                  viewBox="0 0 576 512"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </p>
              <p className="card-text">{ele.vote_count} </p>
              <p className="card-text">{ele.overview}</p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
      <button typpe="submit" onClick={handleClick}>
        {" "}
        Submit{" "}
      </button>
    </div>
  );
}

export default Home;
