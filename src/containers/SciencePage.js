import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSingleSourceNews } from "../actions/newsActions";
import { NewsRow } from "../components/NewsRow";
import NewsBySource from "./NewsBySource";

class SciencePage extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.onLoadSingleSouceNews('techcrunch');
  }

  
  render() {
    return ( 
      
      <div className="row">
            <main className="posts-listing col-lg-8">
              <div className="container">
               <NewsBySource source ="techcrunch" />
              </div>
            </main>
            <aside className="col-lg-4">
            <header>
                <h3 className="h6">Search the blog</h3>
              </header>
            </aside>
          </div>
      
    );
  }
}



export default connect(null, null)(SciencePage);
