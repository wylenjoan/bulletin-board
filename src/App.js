import "./App.css";
import { Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import CreateArticle from "./pages/CreateArticle";
import ArticleDetail from "./pages/ArticleDetail";
import EditArticle from "./pages/EditArticle";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path="/article-detail" element={<ArticleDetail />} />
        <Route path="/edit-article" element={<EditArticle />} />
      </Routes>
    </div>
  );
}

export default App;
