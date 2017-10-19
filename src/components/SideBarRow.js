
import React from "react";

export const SideBarRow = ({ articles }) => {
    return (
      <div className="row">
        {articles.map(function(article, index) {
          return (
            <div className="item d-flex align-items-center"  key={index}>
            <div className="image"><img src={article.urlToImage} alt="..." className="img-fluid"/></div>
            <div className="title"><a href={article.url} className="animsition-link"><strong>{article.title}</strong> </a>
            <div className="d-flex align-items-center">
                <div className="views"><i className="icon-eye"></i> {article.urlImage }</div>
                <div className="comments"><i className="icon-comment"></i>12</div>
            </div>
            </div>
        </div>
          );
        })}
      </div>
    );
  };
  