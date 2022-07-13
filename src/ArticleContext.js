import { createContext } from "react";
import DummyArticles from "./DummyArticles";

const ArticleContext = createContext(DummyArticles);
export default ArticleContext;
