import React from "react";
import styled from "@emotion/styled";
import Label from "./Label";
import { Link } from "react-router-dom";

const CardStyled = styled.div`
  .card.modified,
  .card-img.modified {
    max-width: 13rem;
    border-radius: 14px 14px 14px 14px;
    border: 0;
  }

  .card-img-overlay {
    top: unset;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .card:hover .card-img-overlay {
    top: unset;
    opacity: 1;
  }

  .card:hover {
    scale: 1.1;
    z-index: 12;
  }

  @media only screen and (max-width: 767px) {
    .card-img.modified {
      max-width: 10rem;
    }
  }
`;

function Card({
  to = "",
  key = "",
  title = "",
  imgpath = "",
  contentoverview = "",
  contentvote = "",
}) {
  return (
    <Link to={to}>
      <CardStyled className="wrapper">
        <div className="card modified bg-dark text-white" key={key}>
          <img
            className="card-img modified"
            src={`https://image.tmdb.org/t/p/original${imgpath}`}
            alt="Card ige"
          />
          <div className="card-img-overlay">
            <Label headingthird fontsize="18px" color="#fff">
              {title}
            </Label>
            <Label
              contentHeading
              maxheight="52px"
              overflowy="scroll"
              overwrap="break-word"
              whitespace="normal"
              fontsize="12px"
              color="#fff"
              margin="0"
            >
              {contentoverview}
            </Label>
            <Label contentHeading fontsize="15px" color="#fff" margin="0">
              {contentvote}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="0.625em"
                viewBox="0 0 576 512"
                fill="yellow"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </Label>
          </div>
        </div>
      </CardStyled>
    </Link>
  );
}

export default Card;
