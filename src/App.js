import React from 'react';
import './App.css';

import Logo from './assets/images/logo.svg';
import {  Link } from "react-router-dom";

import PostForm from './components/PostForm';
import AllPost from './components/AllPost';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <header>
          <Link to="/#">
              <img className="App-logo-image" src={Logo} alt="logo" />
          </Link>
          <h1>CoophiNotas</h1>
        </header>

        <div className="row">
          <div className="col-sm-3 col-md-6 col-lg-4">
          <AllPost />
          </div>
          <div className="col-sm-9 col-md-6 col-lg-8">
            <PostForm /> 
          </div>
        </div>
        
      </React.Fragment>
    </div>
  );
}

export default App;
