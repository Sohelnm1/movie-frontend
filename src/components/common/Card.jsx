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
              content={contentoverview}
              maxheight="52px"
              overflowy="scroll"
              overwrap="break-word"
              whitespace="normal"
              fontsize="12px"
              color="#fff"
              margin="0"
            />
            <Label
              contentHeading
              content={contentvote}
              fontsize="15px"
              color="#fff"
              margin="0"
            />
          </div>
        </div>
      </CardStyled>
    </Link>
  );
}

export default Card;
