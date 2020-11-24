import React, { Component } from "react";
// import { FaAlignRight } from "react-icons/fa";
import "../css/App.css";
import Box from "@material-ui/core/Box";
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    
    return (
      <>
        <div className="navBar">
          {/* <button onClick={this.Toggle}>
            <FaAlignRight />
          </button> */}

          <Box display="flex" p={1} bgcolor="background.paper">
            <Box p={1} flexGrow={1} bgcolor="grey.300">
              <Link to='/' > Home</Link>
            </Box>
            <Box p={1} bgcolor="grey.300">
              {/* <Link to='/SignIn'> Sign in</Link> */}
            </Box>
            <Box p={1} bgcolor="grey.300">
              {/* <Link to='/signUp'> Sign Up</Link> */}
            </Box>
          </Box>
        </div>
      </>
    );
  }
}
