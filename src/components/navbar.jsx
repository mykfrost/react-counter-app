import React, { Component } from 'react';
//stateless functional components
const NavBar = ({totalCounters}) =>{

  return (
  <nav className="navbar bg-light">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">NavBar
  <span className="badge badge badge-pill badge-secondary m-2">
    {totalCounters}</span></a>
  </div>
  </nav>
  
  );
  
};



 
export default NavBar;