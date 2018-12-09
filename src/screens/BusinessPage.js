import React from "react";
import  { BusinessSources } from "../utils/articleSources";
import NewsPage from "../components/NewsPage";

const BusinessPage = () =>
  <NewsPage 
    sideBarTitle="Latest on Business"
    mainSource="business-insider"
    sideBarSources={BusinessSources} 
   />;  
   
export default BusinessPage;