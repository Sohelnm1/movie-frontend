import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const NavigationStyled = styled.div`
  background: black;
  padding: 20px;
  .commonlink {
    color: #fff;
    margin: 0 10px 0 10px;
    text-decoration: none;
    :hover {
      color: red;
    }
  }
  .logostyled {
    width: 20px;
    :hover {
      fill: red;
    }
  }
`;

function Navigation() {
  return (
    <NavigationStyled>
      <div className="container nav-section d-flex flex-wrap justify-content-center">
        <div className="externallinks ">
          <Link to="/movielist" className="commonlink">
            <svg
              viewBox="0 0 512 512"
              fill="#ffffff"
              stroke="#ffffff"
              className="logostyled"
            >
              <g stroke-width="0"></g>
              <g stroke-linecap="round" stroke-linejoin="round"></g>
              <g>
                <style type="text/css"> </style>{" "}
                <g>
                  <path
                    class="st0"
                    d="M484.516,19.531l-48.297,69.797l47.984,69.344h-54.266l-47.969-69.344l49.813-72h-68.625l-49.813,72 l47.969,69.344h-54.25l-47.969-69.344l49.797-72H240.25l-49.813,72l47.984,69.344h-54.266l-47.969-69.344l49.813-72h-68.625 l-49.813,72l47.969,69.344h-54.25L13.313,89.328l49.813-72H40c-22.094,0-40,17.906-40,40v397.344c0,22.094,17.906,40,40,40h432 c22.094,0,40-17.906,40-40V57.328C512,39.625,500.438,24.797,484.516,19.531z M480,454.672c0,4.422-3.594,8-8,8H40 c-4.406,0-8-3.578-8-8v-264h448V454.672z"
                  ></path>
                  <path
                    class="st0"
                    d="M215.688,393.156c0.75,0.438,1.672,0.406,2.406-0.031l101.75-60.719c0.719-0.438,1.156-1.219,1.156-2.063 c0-0.813-0.438-1.609-1.156-2.031l-101.75-60.734c-0.734-0.422-1.656-0.453-2.406-0.031c-0.719,0.422-1.188,1.234-1.188,2.078 v60.719v60.734C214.5,391.953,214.969,392.75,215.688,393.156z"
                  ></path>
                </g>
              </g>
            </svg>
          </Link>
          <Link to="/movielist" className="commonlink ">
            Movie List from Database
          </Link>
          <Link to="/apilist" className="commonlink ">
            Movie List from API-Directly
          </Link>
        </div>
        <div className="searchfilter">
          <Link to="/" className="commonlink">
            Login
          </Link>
          <Link to="/signup" className="commonlink">
            SignUp
          </Link>
        </div>
      </div>
    </NavigationStyled>
  );
}

export default Navigation;
