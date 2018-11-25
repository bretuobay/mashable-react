/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import CulturePage from '../components/pages/CulturePage';
import EntertainmentPage from '../components/pages/EntertainmentPage';
import TechnologyPage from '../components/pages/TechnologyPage';
import SciencePage from '../components/pages/SciencePage';
import BusinessPage from '../components/pages/BusinessPage';
import VideosPage from '../components/pages/VideosPage';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
     <div className="container-fluid">
       <Header/>
       <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/news" component={HomePage} />
          <Route path="/culture" component={CulturePage} />
          <Route path="/entertainment" component={EntertainmentPage} />
          <Route path="/technology" component={TechnologyPage} />
          <Route path="/science" component={SciencePage} />
          <Route path="/business" component={BusinessPage} />
          <Route path="/videos" component={VideosPage} />
        </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
