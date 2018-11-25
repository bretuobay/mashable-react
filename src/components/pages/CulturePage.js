import React from "react";
import  { CultureSources } from "../../utils/articleSources";
import NewsPage from "../NewsPage";

const CulturePage = () => 
 (
  <NewsPage 
    bannerTitle="Latest on Culture"
    mainSource="daily-mail"
    sideBarSources={CultureSources} 
   />
  );
  
export default CulturePage;

