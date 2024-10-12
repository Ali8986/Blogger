import BlogsPage from "./blogs";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogsPage blogs={blogs} title="All Blogs"></BlogsPage>}
    </div>
  );
};

export default Home;
