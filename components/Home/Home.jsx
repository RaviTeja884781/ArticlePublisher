import React, { useEffect, useState } from "react";
import Article from "../Article/Article";

const Home = () => {
  const [articles, setarticles] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("articles") === null) {
      localStorage.setItem("articles", "[]");
    } else {
      let Article = localStorage.getItem("articles");
      Article = JSON.parse(Article);
      setarticles(Article);
      // console.log(Article);
      // Article.forEach((element) => {
      //   return
      // });
    }
    // console.log(localStorage.getItem("articles"));
  }, []);

  return <div>{articles && <Article articles={articles} />}</div>;
};

export default Home;
