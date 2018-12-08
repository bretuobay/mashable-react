import React from "react";
import  { TechnologySources } from "../../utils/articleSources";
import NewsPage from "../NewsPage";

export default TechnologyPage = () =>
  <NewsPage 
    sideBarTitle="Latest on Technology"
    mainSource="ars-technica"
    sideBarSources={TechnologySources} 
   />;

