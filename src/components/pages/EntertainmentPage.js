import React from "react";
import  { EntertainmentSources } from "../../utils/articleSources";
import NewsPage from "../NewsPage";

const  EntertainmentPage = () =>
(
  <NewsPage 
    sideBarTitle="Latest on Entertainment"
    mainSource="the-lad-bible"
    sideBarSources={EntertainmentSources} 
   />
  );
  
export default EntertainmentPage;
