import React, { useContext, useRef, useState } from 'react'
import './Aside.css'
import { Link } from 'react-router-dom'
// import {ThemeContext} from './Header'

function Aside({ width, non, mar,left }) {

  console.log(mar,non);
  
  return (
    <>
    <div style={{ width }} className="aside" >
      <Link to="/">
        <div className="menu">
        <i style={{ marginLeft: mar }} className="bx bxs-home"></i>
        <h1 style={{ display: non}}>Home</h1>
        </div>
      </Link>


      <Link to="/trending">
        <div className="menu">
          <i style={{marginLeft:mar}} className="bx bxs-hot"></i>
          <h1 style={{ display: non}}>Trending</h1>
        </div>
      </Link>


    

      <Link to="/anime">
        <div className="menu">
          <i style={{marginLeft:mar}} className="bx bxs-movie"></i>
          <h1 style={{ display: non}}>Anime</h1>
        </div>
      </Link>

      <Link to="/popular-show">
        <div className="menu">
          <i style={{marginLeft:mar}} className="bx bxs-crown"></i>
          <h1 style={{ display: non}}>Popular Show</h1>
        </div>
      </Link>


      <Link to="/random">
        <div className="menu">
          <i style={{marginLeft:mar}} className="bx bx-shuffle"></i>
          <h1 style={{ display: non}}>Random</h1>
        </div>

      </Link>
    </div>



    {/* Responsive Aside */}

    <div id='responsive_aside' style={{left:left}} >
      <Link to="/">
        <div className="menu">
        <i style={{ marginLeft: mar }} className="bx bxs-home"></i>
        <h1 >Home</h1>
        </div>
      </Link>


      <Link to="/trending">
        <div className="menu">
          <i style={{marginLeft:mar}} className="bx bxs-hot"></i>
          <h1 >Trending</h1>
        </div>
      </Link>


    


      <Link to="/anime">
        <div className="menu">
          <i style={{marginLeft:mar}} className="bx bxs-movie"></i>
          <h1 >Anime</h1>
        </div>
      </Link>

      <Link to="/popular-show">
        <div className="menu">
          <i style={{marginLeft:mar}} className="bx bxs-crown"></i>
          <h1 >Popular Show</h1>
        </div>
      </Link>


      <Link to="/random">
        <div className="menu">
          <i style={{marginLeft:mar}} className="bx bx-shuffle"></i>
          <h1 >Random</h1>
        </div>

      </Link>
    </div>

    </>
  );
}

export default Aside