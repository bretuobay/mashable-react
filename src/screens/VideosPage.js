import React from "react";
import  { VideoSources } from "../utils/articleSources";
import NewsPage from "../components/NewsPage";

const VideosPage = () =>
    <NewsPage
    sideBarTitle="Latest Videos"
    mainSource="ign"
    sideBarSources={VideoSources}
    />;
    
export default VideosPage;   