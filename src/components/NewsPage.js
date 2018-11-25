import React from "react";
import NewsBySource from "../containers/NewsBySource";
import Weather from "../containers/Weather";
import CurrencyRates from "../containers/CurrencyRates"

const NewsPage = ({bannerTitle, mainSource, sideBarSources, isHomePage = false}) => (
    <div className="row">
        <main className="posts-listing col-lg-8">
          <div className="container">
          {
           isHomePage ? mainSource.map((source, index) => 
             <NewsBySource 
              source={source.id}
              key={index}
              isSideBarList={false}
             />
           ): <NewsBySource source={mainSource} />
          } 
          </div>
        </main>

        <aside className="col-lg-4">
         { isHomePage? 
             <div className="widget search">
             <Weather currentCity="Kumasi" />
             <div className="widget latest-posts">
             <h6>Currency Exchange</h6>
             <CurrencyRates currencyRatesList="EURUSD,GBPJPY,AUDUSD"/>
             </div>
          </div>
          :
          <div className="widget latest-posts">
            <header>
              <h3 className="h6">{bannerTitle}</h3>
            </header>
            <div className="blog-posts">
              <ul className="list-group">
                {sideBarSources.map(function(source, index) {
                  return (
                    <li className="list-group-item" key={index}>
                      <h6> {source.label}</h6>
                      <NewsBySource
                        key={index}
                        isSideBarList={true}
                        source={source.id}
                      >
                      </NewsBySource>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
         }
        </aside>
      </div>
);

export default NewsPage;