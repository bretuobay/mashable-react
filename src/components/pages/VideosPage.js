import React from "react";
import  { VideoSources } from "../../utils/articleSources";
import NewsPage from "../NewsPage";

export default VideosPage = () =>
    <NewsPage
    sideBarTitle="Latest Videos"
    mainSource="ign"
    sideBarSources={VideoSources}
    />;