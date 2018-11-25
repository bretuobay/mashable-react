import React from "react";
import  { VideoSources } from "../../utils/articleSources";
import NewsPage from "../NewsPage";

const VideosPage = () =>
  ( 
    <NewsPage
     bannerTitle="Latest Videos"
    mainSource="ign"
    sideBarSources={VideoSources}
    />
  );

export default VideosPage;