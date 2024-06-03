import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </Container>
  );
};
const Container = styled.div`
  padding: 0 4rem;
  .logo {
    img {
      height: 3rem;
      border: 1px solid white;
    }
  }
  button {
    padding: 0.5rem 1rem;
    // background-color: #80808000;
    background: linear-gradient(90deg, #000000, #3533cd);
    border: 1px solid white;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;
export default Header;
