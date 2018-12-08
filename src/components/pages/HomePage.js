import React from "react";
import  { MainSources } from "../../utils/articleSources";
import NewsPage from "../NewsPage";

export default HomePage = () =>
  <NewsPage 
    mainSource={MainSources}
    isHomePage
   />;
