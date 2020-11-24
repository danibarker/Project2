import React, { Component } from 'react';
import SearchMovie from './components/SearchMovie'
import './css/App.css';

class App extends Component {
  render() {
    return (
     
      <div className="App">
        <h1>THE MOVIE WARNING DATABASE</h1>
        <SearchMovie />
        <Movielist/>
       </div>
      
    );
  }
}

export default App;
