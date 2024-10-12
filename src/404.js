import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>That Page Cannot be Found</p>
      <Link to="/">Go TO HomePage</Link>
    </div>
  );
};

export default ErrorPage;
