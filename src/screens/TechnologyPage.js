import React from "react";
import  { TechnologySources } from "../utils/articleSources";
import NewsPage from "../components/NewsPage";

const TechnologyPage = () =>
  <NewsPage 
    sideBarTitle="Latest on Technology"
    mainSource="ars-technica"
    sideBarSources={TechnologySources} 
   />;

export default TechnologyPage;