import React from "react";

export const NewsRow = ({ articles }) => {
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
};
