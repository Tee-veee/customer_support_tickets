import {
  FaSignInAlt,
  FaSignOutAlt,
  FaMoon,
  FaSun,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-screen py-4 bg-stone-800 text-white flex items-center justify-between px-6 xl:px-80">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <ul className="flex items-center space-x-6">
          <li className="flex items-center">
            <Link to="/login" className="flex items-center space-x-2">
              <FaSignInAlt className="text-3xl" />
              <p>Login</p>
            </Link>
          </li>
          <li>
            <Link to="/register" className="flex items-center space-x-2">
              <FaUser className="text-3xl" />
              <p>Register</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
