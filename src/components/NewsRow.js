import React from "react";

export const NewsRow = ({ articles, isSideBarList }) => {

  if(isSideBarList){

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


  }else{

    return (
      <div className="row">
        {articles.map(function(article, index) {
          return (
            <div className="post col-xl-6" key={index}>
              <div className="post-thumbnail">
                <a href={article.url} className="animsition-link">
                  <img src={article.urlToImage} alt="..." className="img-fluid" />
                </a>
              </div>
              <div className="post-details">
                <div className="date meta-last">{article.publishedAt}</div>
              </div>
              <a href={article.url} className="animsition-link">
                <h3 className="h4 w-100">{article.title}</h3>
              </a>
              <p className="text-muted">{article.description}</p>
              <footer className="post-footer d-flex align-items-center">
                <a
                  href="#"
                  className="author d-flex align-items-center flex-wrap"
                >
                  <div className="title">{article.author} </div>
                </a>
              </footer>
            </div>
          );
        })}
      </div>
    );

  }
  
};
