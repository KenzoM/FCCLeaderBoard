import React from 'react';
import { Component } from 'react';

export default class Header extends Component{
  render(){
    return (
      <nav className="navbar navbar-light fcccolor">
        <a href="https://www.freecodecamp.com"><img className="fcclogo"
          src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg"
          alt="fcc-logo" /> </a>
      </nav>
    )
  }
}
