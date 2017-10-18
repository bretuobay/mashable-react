import React from "react";
import { Switch, NavLink, Route } from 'react-router-dom';

export const Header = (props)=>{
    const activeStyle = { color: '#333' };
  
    return(
        <header className="header">
        <nav className="navbar navbar-toggleable-md">   
        <div className="container"> 
            <div className="navbar-header d-flex align-items-center justify-content-between">
             < NavLink  to="/" className="navbar-brand animsition-link">Mashable Clone</NavLink>
              <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span></span><span></span><span></span></button>
            </div>
            <div id="navbarcollapse" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">< NavLink  to="/" className="nav-link animsition-link"  activeStyle={activeStyle}>HOME</NavLink></li>
                <li className="nav-item">< NavLink  to="/culture" className="nav-link animsition-link"  activeStyle={activeStyle}>CULTURE & POLITICS</NavLink></li>
                <li className="nav-item">< NavLink  to="/entertainment" className="nav-link animsition-link"  activeStyle={activeStyle}>ENTERTAINMENT</NavLink></li>
                <li className="nav-item">< NavLink  to="/technology" className="nav-link animsition-link"  activeStyle={activeStyle}>TECH </NavLink></li>
                <li className="nav-item">< NavLink  to="/science" className="nav-link animsition-link"  activeStyle={activeStyle}>SCIENCE</NavLink></li>
                <li className="nav-item">< NavLink  to="/business" className="nav-link animsition-link"  activeStyle={activeStyle}>BUSINESS</NavLink></li>
                <li className="nav-item">< NavLink  to="/videos" className="nav-link animsition-link"  activeStyle={activeStyle}>VIDEOS & MOVIES </NavLink></li>
              </ul>
            </div>
            </div>
         
        </nav>
      </header>
    );
}