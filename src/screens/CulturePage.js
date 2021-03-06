import React from "react";
import  { CultureSources } from "../utils/articleSources";
import NewsPage from "../components/NewsPage";

const CulturePage = () => 
  <NewsPage 
    sideBarTitle="Latest on Culture"
    mainSource="daily-mail"
    sideBarSources={CultureSources} 
   />;

export default CulturePage;
  

