import React from "react";
import  { ScienceSources } from "../utils/articleSources";
import NewsPage from "../components/NewsPage";

const SciencePage = () => 
  <NewsPage 
    sideBarTitle="Latest on Science"
    mainSource="techcrunch"
    sideBarSources={ScienceSources} 
   />;
 
export default SciencePage
