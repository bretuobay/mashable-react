import React, { Component } from "react";
import NewsBySource from "./NewsBySource";
import Weather from "./Weather";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let sideMashList = [
      { id: "daily-mail", label: "Daily Mail" },
      { id: "football-italia", label: "Footbal Italia" },
      { id: "business-insider-uk", label: "Business Insider UK " }
    ];

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
