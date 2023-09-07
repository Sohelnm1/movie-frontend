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
`;

function Navigation() {
  return (
    <NavigationStyled>
      <div className="container nav-section d-flex flex-wrap justify-content-between">
        <div className="externallinks">
          <Link to="/movielist" className="commonlink">
            Movie List from Database
          </Link>
          <Link to="/apilist" className="commonlink">
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
