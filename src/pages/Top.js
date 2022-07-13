import { useContext } from "react";
import { Link } from "react-router-dom";
import ArticleContext from "../ArticleContext";

export default function Top() {
  const articles = useContext(ArticleContext);
  const handleDelete = (index) => {
    articles.splice(index, 1);
  };
  return (
    <div className="Top">
      <Link to="/create-article">
        <button>Create New Article</button>
      </Link>

      <table>
        {articles.map(({ title, content }, index) => (
          <tr>
            <td>{index}</td>
            <td>{title}</td>
            <td className="truncate">{content}</td>
            <td>
              <button>Edit</button>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
