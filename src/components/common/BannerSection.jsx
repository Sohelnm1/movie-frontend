import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Label from "./Label";

const BannerStyled = styled.div`
  .banner-text {
    bottom: 0;
    left: 0;
    text-align: left;
    padding: 70px;
    text-decoration: none;
    color: #fff;
  }

  .banner-headtxt {
    font-size: 80px;
    margin-botton: 20px;
  }
  .imdbrating {
    margin: 0 20px 0 20px;
    font-size: 30px;
  }
  .releasedate {
    font-size: 30px;
  }

  @media only screen and (max-width: 767px) {
    .banner-text {
      padding: 20px 16px 0px;
    }
    .banner-headtxt {
      font-size: 20px;
    }
    .releasedate,
    .imdbrating {
      font-size: 15px;
    }
  }
`;

function BannerSection({
  to = "",
  imgpath = "",
  title = "",
  overview = "",
  vote = "",
  id = "",
  releasedate = "",
}) {
  return (
    <Link to={to}>
      <BannerStyled className="position-relative banner-section" key={id}>
        <img
          className="banner-image"
          src={`https://image.tmdb.org/t/p/original${imgpath}`}
          alt="Card ige"
        />
        <div className="position-absolute banner-text">
          <h5 className="banner-headtxt">{title}</h5>
          <div className="date-rating d-flex flex-wrap ">
            <p className="releasedate">{releasedate}</p>
            <p className="imdbrating">
              {vote} Imdb
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="0.625em"
                viewBox="0 0 576 512"
                fill="yellow"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </p>
          </div>

          <p className="overview-text d-none d-md-block">
            <i>{overview}</i>
          </p>
        </div>
      </BannerStyled>
    </Link>
  );
}

export default BannerSection;
