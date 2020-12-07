import React from "react";
import "../css/App.css";
import Box from "@material-ui/core/Box";
import logo from "../images/home.png";
import titleImage from "../images/title.png";
export default function NavBar({ currentPage, setCurrentPage }) {
  const token = localStorage.getItem('token')
  return (
    <>
      <div className="navBar">
        <Box display="flex" p={1} bgcolor="white">
          <div style={{width: "10%"}}>
            <img
              style={{ cursor: "pointer",width: "90%",margin: "0px 5%", maxHeight: "35px",maxWidth: "35px"}}
              width="20px"
              src={logo}
              p={1}
              onClick={() => {
                setCurrentPage("Navigation");
              }}
            ></img>
          </div>
          <div style={{display: "flex",justifyContent: "center",width: "75%",margin: "auto"}}>
            <img alt="The Movie Warning Database"
              src={titleImage}
              style={{ width: "90%", height: "auto", margin:"0 5%", maxHeight: "35",maxWidth: "400px" }}
            ></img>
          </div>
          <div style={{width:"10%",
    
    display: "flex",
    justifyContent: "flex-end" }}>
            <button
              
            className="btn btn-success" style={{ fontSize: "1.5vw", padding:" 0px 5px"}}
                onClick={() => {
                  setCurrentPage("SignIn");
                }}
              >
              {token ? "My Account" : "Sign In"}
              </button>
            
          </div>
        </Box>
        <div>{currentPage}</div>
      </div>
    </>
  );
}
