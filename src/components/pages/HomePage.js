import React from "react";
import  { MainSources } from "../../utils/articleSources";
import NewsPage from "../NewsPage";

const HomePage = () =>
  <NewsPage 
    mainSource={MainSources}
    isHomePage
   />;

export default HomePage;

