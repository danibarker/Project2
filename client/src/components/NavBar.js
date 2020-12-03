import React from "react";
import "../css/App.css";
import Box from "@material-ui/core/Box";

export default function NavBar({ setCurrentPage }) {
    return (
        <>
            <div className="navBar">
                <Box display="flex" p={1} bgcolor="background.paper">
                    <Box p={1} bgcolor="grey.300">
                        <p
                            onClick={() => {
                                setCurrentPage("Navigation");
                            }}
                        >
                            Home
                        </p>
                    </Box>
                    <Box textAlign={"center"} flexGrow={1} p={1}>
                        The Movies Warning Database
                    </Box>
                    <Box p={1} bgcolor="grey.300">
                        <p
                            onClick={() => {
                                setCurrentPage("SignIn");
                            }}
                        >
                            Sign in
                        </p>
                    </Box>
                    <Box p={1} bgcolor="grey.300">
                        <p
                            onClick={() => {
                                setCurrentPage("SignUp");
                            }}
                        >
                            Sign Up
                        </p>
                    </Box>
                </Box>
            </div>
        </>
    );
}
