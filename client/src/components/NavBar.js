import React from "react";
import "../css/App.css";
import Box from "@material-ui/core/Box";
import logo from "../images/home.png";
import titleImage from "../images/title.png";
export default function NavBar({ setCurrentPage }) {
  return (
    <>
      <div className="navBar">
        <Box display="flex" p={1} bgcolor="background.paper">
          <div style={{width:"10%",margin:"auto"}}>
            <img
              style={{ cursor:"pointer", width: "90%", margin:"0 5%"}}
              width="20px"
              src={logo}
              p={1}
              onClick={() => {
                setCurrentPage("Navigation");
              }}
            ></img>
          </div>
          <div style={{width:"70%"  , margin:"auto" }}>
            <img
              src={titleImage}
              style={{ width: "90%", height: "auto", margin:"0 5%" }}
            ></img>
          </div>
          <div style={{width:"10%",
    
    display: "flex",
    justifyContent: "flex-end"}}>
            <button
              style={{ width: "100%", height: "auto", padding: "0 20% 0 20%" }}
              
            className="btn btn-success" style={{ fontSize: "2vw", paddingLeft:"5px",paddingRight:"5px",paddingTop:"0px",paddingBottom:"0px"}}
                onClick={() => {
                  setCurrentPage("SignIn");
                }}
              >
                Sign in
              </button>
            
          </div>
        </Box>
      </div>
    </>
  );
}
