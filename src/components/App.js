/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';

import Weather from '../containers/Weather';
import NewsBySource from '../containers/NewsBySource';



// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
     <div className="container-fluid">
       <header className="header">
         <nav className="navbar navbar-toggleable-md">    
             <div className="navbar-header d-flex align-items-center justify-content-between">
              < NavLink  to="/" className="navbar-brand animsition-link">Mashable Clone</NavLink>
               <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span></span><span></span><span></span></button>
             </div>
             <div id="navbarcollapse" className="collapse navbar-collapse">
               <ul className="navbar-nav ml-auto">
                 <li className="nav-item">< NavLink  to="/home" className="nav-link animsition-link"activeStyle={activeStyle}>HOME</NavLink></li>
                 <li className="nav-item">< NavLink  to="/culture" className="nav-link animsition-link"activeStyle={activeStyle}>CULTURE & POLITICS</NavLink></li>
                 <li className="nav-item">< NavLink  to="/entertainment" className="nav-link animsition-link"activeStyle={activeStyle}>ENTERTAINMENT</NavLink></li>
                 <li className="nav-item">< NavLink  to="/technology" className="nav-link animsition-link"activeStyle={activeStyle}>TECH </NavLink></li>
                 <li className="nav-item">< NavLink  to="/science" className="nav-link animsition-link"activeStyle={activeStyle}>SCIENCE</NavLink></li>
                 <li className="nav-item">< NavLink  to="/business" className="nav-link animsition-link"activeStyle={activeStyle}>BUSINESS</NavLink></li>
                 <li className="nav-item">< NavLink  to="/videos" className="nav-link animsition-link"activeStyle={activeStyle}>VIDEOS & MOVIES </NavLink></li>
               </ul>
             </div>
          
         </nav>
       </header>
       <div className="container">
        <Switch>
          <Route exact path="/" component={NewsBySource} />
          <Route path="/news" component={NewsBySource} />
          <Route path="/weather" component={Weather} />
        </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
