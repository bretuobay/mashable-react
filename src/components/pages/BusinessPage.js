import React from "react";
import  { BusinessSources } from "../../utils/articleSources";
import NewsPage from "../NewsPage";

export default BusinessPage = () =>
  <NewsPage 
    sideBarTitle="Latest on Business"
    mainSource="business-insider"
    sideBarSources={BusinessSources} 
   />;  
