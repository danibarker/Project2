import React from "react";
import "../css/App.css";
import Box from "@material-ui/core/Box";
import logo from "../images/home2.png";
import titleImage from "../images/title.png";
export default function NavBar({ currentPage, setCurrentPage }) {
  const token = window.sessionStorage.getItem("token");
  return (
    <>
      <div className="navBar">
        <Box display="flex" p={1}>
          <div style={{ width: "10%" }}>
            {/* <img
              alt="Home"
              style={{
                cursor: "pointer",
                width: "90%",
                margin: "0px 5%",
                maxHeight: "35px",
                maxWidth: "35px",
              }}
              width="20px"
              src={logo}
              p={1}
              onClick={() => {
                setCurrentPage("Navigation");
              }}
            ></img> */}
            <svg style={{cursor:"pointer"}}onClick={() => {
                setCurrentPage("Navigation");
              }} width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "70%",
              margin: "auto",
              fontFamily: "raleway",
    fontSize: "4vw"
            }}
          >
            {/* <img
              alt="The Movie Warning Database"
              src={titleImage}
              style={{
                width: "90%",
                height: "auto",
                margin: "0 5%",
                maxHeight: "35",
                maxWidth: "400px",
              }}
            ></img> */}
            The Movie Warning Database
          </div>
          <div
            style={{
              alignItems: "center",
              width: "20%",

              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <span
              className=""
              style={{
                cursor: "pointer",
                fontSize: "2.0vw",
                padding: " 0px 5px",
              }}
              onClick={() => {
                setCurrentPage("SignIn");
              }}
            >
              {token ? "My Account" : "Log In"}
            </span>
            <span
              className=""
              style={{
                cursor: "pointer",
                fontSize: "2.0vw",
                padding: " 0px 5px",
              }}
              onClick={() => {
                setCurrentPage("SignUp");
              }}
            >
              {token ? "" : "Sign Up"}
            </span>
          </div>
        </Box>
        <div>{currentPage}</div>
      </div>
    </>
  );
}
