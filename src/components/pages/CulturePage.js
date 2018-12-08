import React from "react";
import  { CultureSources } from "../../utils/articleSources";
import NewsPage from "../NewsPage";

export default CulturePage = () => 
  <NewsPage 
    sideBarTitle="Latest on Culture"
    mainSource="daily-mail"
    sideBarSources={CultureSources} 
   />;
  

