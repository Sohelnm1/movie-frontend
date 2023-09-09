import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import SkeletonTemp from "./common/SkeletonTemp";

const WrapperStyled = styled.div`
  width: 100%;
  padding: 30px;

  .imgpath {
    width: 70%;
  }
  .content-wrapper {
    text-align: left;
    padding: 35px;
  }
  .sectionwrap {
    width: 100%;
    padding: 20px;
    top: 440px;
  }
  .moviedetail-wrapper {
    padding: 35px;
  }
  .bannerimg {
    width: 100%;
  }

  @media only screen and (max-width: 991px) {
    .imgpath {
      width: 100%;
    }
    .moviedetail-wrapper,
    .content-wrapper {
      padding: 10px;
    }
  }
  @media only screen and (max-width: 1023px) {
    .bannerimg {
      display: none;
    }
    .sectionwrap {
      border: 5px solid #fff;
      top: 0;
    }
  }
  .imgpathbanner {
    border-radius: 50px 0px 50px 0px;
  }
  @media only screen and (min-width: 1024px) {
    .sectionwrap {
      position: absolute;
      flex-direction: row-reverse;
    }
    .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: end;
    }
  }
`;

function MovieDetail() {
  const { id } = useParams();

  const [moviedetail, setMovieDetail] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/id/${id}`);
        setMovieDetail(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [id]);

  console.log(moviedetail);

  return (
    <WrapperStyled>
      {moviedetail ? (
        <>
          <div className="bannerimg position-relative" key={id}>
            <img
              className="w-100 imgpathbanner"
              src={`https://image.tmdb.org/t/p/original${moviedetail.backdrop_path}`}
              alt="Card Iage"
            />
          </div>
          <div className="container d-md-flex sectionwrap " key={id}>
            <div className="moviedetail-wrapper">
              <img
                className="imgpath"
                src={`https://image.tmdb.org/t/p/original${moviedetail.poster_path}`}
                alt="Card Iage"
              />
            </div>
            <div className="content-wrapper">
              <h5 className="text-white">{moviedetail.title}</h5>
              <p className="text-white">
                Language: {moviedetail.original_language}
              </p>
              <p className="text-white">
                Average Vote: {moviedetail.vote_average}
              </p>
              <p className="text-white">Vote Count: {moviedetail.vote_count}</p>
              <p className="text-white">
                Popularity : {moviedetail.popularity}
              </p>
              <p className="text-white">
                Release date: {moviedetail.release_date}
              </p>
              <p className="text-white">{moviedetail.overview}</p>
            </div>
          </div>
        </>
      ) : (
        <SkeletonTemp />
      )}
    </WrapperStyled>
  );
}

export default MovieDetail;
