import { Link, NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

function NavBar() {
  const { currentUser, logOut } = useUser();
  return (
    <nav className="flex justify-center items-center p-5">
      <Link to="/">
        <img src="/vine-logo.png" alt="vine logo" className="h-20" />
      </Link>

      <div className="flex items-center space-x-4 ml-auto text-lg font-semibold">
        <NavLink to="/" className={({ isActive }) => isActive && "underline"}>
          Home
        </NavLink>
        {currentUser ? (
         <div className="flex items-baseline space-x-4 ml-auto text-lg font-semibold">
          <NavLink
            to="/feed"
            className={({ isActive }) => isActive && "underline"}
          >
            Feed
          </NavLink>
          <button
          className="outline p-1 rounded-md w-full hover:bg-red-600 hover:text-white hover:cursor-pointer"
          onClick={logOut}
          >
            LogOut
          </button>
         </div>
        ) : (
          <>
            <NavLink
              to="/register"
              className={({ isActive }) => isActive && "underline"}
            >
              Register
            </NavLink>
            <NavLink
              to="/signin"
              className={({ isActive }) => isActive && "underline"}
            >
              {" "}
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
export default NavBar;
