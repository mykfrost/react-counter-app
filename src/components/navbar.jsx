import React, { Component } from 'react';
//stateless functional components
const NavBar = (props) =>{

  return (
  <nav className="navbar bg-light">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">NavBar<span className="badge badge badge-pill badge-secondary m-2">{props.totalCounters}</span></a>
  </div>
  </nav>
  
  );
  
};



 
export default NavBar;