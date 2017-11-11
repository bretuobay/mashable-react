import React, { Component } from "react";
import NewsBySource from "../containers/NewsBySource";
import Weather from "../containers/Weather";
import  { MainSources } from "../utils/articleSources";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let sideMashList = MainSources;

    return (
      <div className="row">
        <main className="posts-listing col-lg-8">
          <div className="container">
            <NewsBySource source="mashable" />
            <NewsBySource source="daily-mail" />
            <NewsBySource source="buzzfeed" />
          </div>
        </main>

        <aside className="col-lg-4">
          <div className="widget search">
            <Weather currentCity="Kumasi" />
            <div className="widget latest-posts">
            <NewsBySource source="techcrunch" isSideBarList={true} />
            </div>
          </div>
        </aside>
      </div>
    );
  }
}

export default HomePage;
