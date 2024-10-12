import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const newBlog = { title, body, author };
  const histors = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      header: { "content-type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      setIsLoading(false);
      histors(-1);
    });
  };

  return (
    <div className="main-form-section">
      <h1>Add a New Blog</h1>
      <div className="form">
        <form className="main-form" onSubmit={handleSubmit}>
          <label className="Form-Label">Title:</label>
          <input
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label className="Form-label">Select Author:</label>
          <select
            className="form-input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          >
            <option value="" defaultValue={""}></option>
            <option value="Ali Osama">Ali Osama</option>
            <option value="Ahmed Awais">Ahmed Awais</option>
          </select>
          <label className="Form-label">Wrtie blog Here:</label>
          <textarea
            required
            className="form-input"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          {!isloading && <button>Submit</button>}
          {isloading && <button>Blog is adding...</button>}
        </form>
      </div>
    </div>
  );
};

export default Create;
