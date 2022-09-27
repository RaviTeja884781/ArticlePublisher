import React from "react";
import "./Article.css";

const Article = ({ articles }) => {
  return (
    <div className="article">
      {articles &&
        articles.map(({ ID, TITLE, COVERPHOTO, CONTENT }) => {
          return (
            <div key={ID} className="article_div">
              <img className="article_pic1" src={COVERPHOTO} alt="coverphoto" />
              <div className="article_body">
                <p className="article_title">{TITLE}</p>
                <p className="article_content">{CONTENT}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Article;
