import React, { Component } from "react";
import NewsBySource from "../containers/NewsBySource";
import Weather from "../containers/Weather";
import CurrencyRates from "../containers/CurrencyRates"
import  { MainSources } from "../utils/articleSources";

const HomePage = () =>
  (
   <div className="row">
     <main className = "posts-listing col-lg-8" >
       <div className = "container" > {
         MainSources.map((source, index) => {
          <NewsBySource 
           source = {source.id}
           key = {index}
           isSideBarList = {false}
           />
         })
       } 
       </div> 
       </main>
      <aside className="col-lg-4">
        <div className="widget search">
          <Weather currentCity="Kumasi" />
          <div className="widget latest-posts">
          <h6>Currency Exchange</h6>
          <CurrencyRates currencyRatesList="EURUSD,GBPJPY,AUDUSD"/>
          </div>
          </div>
      </aside>
   </div>
  );

  export default HomePage;
