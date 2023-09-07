import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styled from "@emotion/styled";
import Card from "./common/Card";
import BannerSection from "./common/BannerSection";
import SkeletonTemp from "./common/SkeletonTemp";

const MovieListStyled = styled.div`
  margin-top: 80px;
  gap: 10px;
`;

function MovieList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/movielist");
        setList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  console.log(list);
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
        {list ? (
          list.map((ele) => {
            return (
              <BannerSection
                to={`/moviedetail/${ele.id}`}
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
      <MovieListStyled className="container d-flex flex-wrap justify-content-center">
        {list ? (
          list.map((ele) => {
            return (
              <Card
                to={`/moviedetail/${ele.id}`}
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

export default MovieList;
