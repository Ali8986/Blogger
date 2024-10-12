import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
const BlogDetails = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let id = location.pathname.split("/")[2];
  const [blogData, setBlogData] = useState(null);
  const { data } = useFetch("http://localhost:8000/blogs/" + id);
  
  const HandleDelte = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then();
    navigate("/");
  };
  useEffect(() => {
    if (location.state) {
      console.log("location from the State");

      setBlogData(location.state);
    } else {
      console.log("Data fetched from  UseFetched");

      setBlogData(data);
    }
  }, [data, location.state]);
  return (
    <>
      {blogData ? (
        <div className="blogDetails">
          <article>
            <div className="headings">
              <h2>{blogData.title}</h2>
              <p>Written By.{blogData.author}</p>
            </div>
            <div className="blog_body">
              <p>{blogData.body}</p>
            </div>
            <button onClick={() => HandleDelte()}>Delete</button>
          </article>
        </div>
      ) : (
        "No Server Respond"
      )}
    </>
  );
};

export default BlogDetails;
