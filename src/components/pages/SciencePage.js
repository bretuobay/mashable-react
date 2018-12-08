import React from "react";
import  { ScienceSources } from "../../utils/articleSources";
import NewsPage from "../NewsPage";

export default SciencePage = () => 
  <NewsPage 
    sideBarTitle="Latest on Science"
    mainSource="techcrunch"
    sideBarSources={ScienceSources} 
   />;
