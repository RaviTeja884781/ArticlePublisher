import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Publisher.css";
import cont from "../../images/cont.png";

const Publisher = () => {
  let navigateToHome = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const time = date.getTime();

    let newArticle = {
      ID: time,
      TITLE: title,
      CONTENT: content,
      COVERPHOTO: coverPhoto,
    };
    let Article = JSON.parse(localStorage.getItem("articles"));

    Article.push(newArticle);
    Article = JSON.stringify(Article);

    localStorage.setItem("articles", Article);
    alert("added to article");

    navigateToHome("/");
  };

  return (
    <div className="publisher">
      <div className="publisher_img"></div>
      <form onSubmit={handleSubmit}>
        <div className="publisher_main">
          <div className="publisher_1">
            <div className="publisher_inp1">
              <label>Title:</label>
              <input
                type="text"
                placeholder="Article Title..."
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="publisher_inp2">
              <label>Content:</label>
              <textarea
                cols="30"
                rows="10"
                value={content}
                onChange={(e) => {
                  setcontent(e.target.value);
                }}
                placeholder="Place Your Content Here..."
              ></textarea>
            </div>
          </div>
          <div className="publisher_2">
            <div className="publisher_inp4">
              <label>Cover Photo:</label>
              <input
                type="url"
                placeholder="Url..."
                value={coverPhoto}
                onChange={(e) => {
                  setCoverPhoto(e.target.value);
                }}
              />
            </div>
            <div className="publisher_img2">
              <img src={cont} alt="" />
            </div>
          </div>
        </div>

        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default Publisher;
