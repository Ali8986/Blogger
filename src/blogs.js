import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";

const BlogsPage = ({ blogs, title }) => {
  return (
    <div className="blogList">
      <h2> {title} </h2>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogdetails/${blog.id}`} state={blog}>
              <h1>{blog.title}</h1>
            </Link>
            <h4>{blog.content}</h4>
            <p>
              Written by <FontAwesomeIcon icon={faGoogleScholar} />
              {blog.author}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsPage;
