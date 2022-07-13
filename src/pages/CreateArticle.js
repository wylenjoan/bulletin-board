import { useState, useContext } from "react";
import ArticleContext from "../ArticleContext";

export default function CreateArticle() {
  const articles = useContext(ArticleContext);

  const [aTitle, setTitle] = useState("");
  const [aContent, setContent] = useState("");

  function handleTitleInput(event) {
    setTitle(event.target.value);
  }
  function handleContentInput(event) {
    setContent(event.target.value);
  }

  const postArticle = (event) => {
    event.preventDefault();
    articles.push({
      title: aTitle,
      content: aContent,
      date: new Date().toLocaleDateString(),
    });
    console.log(articles);
  };

  return (
    <div className="create-article">
      <p>Create New Article Screen</p>
      <form className="create-form" onSubmit={postArticle}>
        <div className="input-group">
          <label htmlFor="title">Article Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleTitleInput}
          />
        </div>

        <div className="input-group">
          <label htmlFor="content">Article Content</label>
          <textarea
            name="content"
            id=""
            cols="30"
            rows="10"
            onChange={handleContentInput}
          ></textarea>
        </div>

        <input type="submit" value="Post Article" />
      </form>
    </div>
  );
}
