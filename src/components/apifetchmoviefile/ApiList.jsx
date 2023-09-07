import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerSection from "../common/BannerSection";
import Card from "../common/Card";
import styled from "@emotion/styled";
import SkeletonTemp from "../common/SkeletonTemp";

const MovieListStyled = styled.div`
  margin-top: 80px;
  gap: 10px;
`;

function ApiList() {
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
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        showArrows={false}
      >
        {movie ? (
          movie.map((ele) => {
            return (
              <BannerSection
                to={`/apimoviedetail/${ele.id}`}
                imgpath={ele.backdrop_path}
                title={ele.title}
                overview={ele.overview}
                vote={ele.vote_average}
                id={ele.id}
                releasedate={ele.release_date}
              />
            );
          })
        ) : (
          <SkeletonTemp />
        )}
      </Carousel>
      <MovieListStyled className="container wrapper d-flex flex-wrap justify-content-center">
        {movie ? (
          movie.map((ele) => {
            return (
              <Card
                to={`/apimoviedetail/${ele.id}`}
                key={ele.id}
                title={ele.title}
                imgpath={ele.poster_path}
                contentoverview={ele.overview}
                contentvote={ele.vote_average}
              />
            );
          })
        ) : (
          <SkeletonTemp />
        )}
      </MovieListStyled>
    </div>
  );
}

export default ApiList;
