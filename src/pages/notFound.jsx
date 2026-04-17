import { BiSolidError } from "react-icons/bi";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="w-3/4 mx-auto bg-red-200 rounded-3xl sm:p-15 p-5 text-center space-y-2 mt-7">
        <div className="flex items-center justify-center text-5xl">
            <BiSolidError />
        </div>
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <button className="btn bg-red-400 rounded-lg m-4 text-white">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;