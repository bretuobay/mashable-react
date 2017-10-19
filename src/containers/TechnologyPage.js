import React, { Component } from "react";
import { fetchSingleSourceNews } from "../actions/newsActions";
import { NewsRow } from "../components/NewsRow";
import NewsBySource from "./NewsBySource";
import SideBarPost from "./SideBarPost";

class TechnologyPage extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.onLoadSingleSouceNews('techcrunch');
  }

  
  render() {
    let sideMashList = [
      { id : 'daily-mail', label : 'Daily Mail'},
      {id : 'football-italia', label : 'Footbal Italia'},
      { id : 'business-insider-uk' , label : 'Business Insider UK '}
     ];

    return (
      <div className="row">
        <main className="posts-listing col-lg-8">
          <div className="container">
            <NewsBySource source="ars-technica" />
          </div>
        </main>

        <aside className="col-lg-4">
          <div className="widget latest-posts">
            <header>
              <h3 className="h6">Latest From Our Sources</h3>
            </header>
            <div className="blog-posts">
              <ul className="list-group">
                {sideMashList.map(function(source, index) {
                  return (
                    <li className="list-group-item"  key={index}>
                    <h6> {source.label}</h6>
                      <SideBarPost  key={index} source={source.id}> </SideBarPost>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}



export default TechnologyPage;
