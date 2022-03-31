import {
  FaSignInAlt,
  FaSignOutAlt,
  FaMoon,
  FaSun,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logoutUser());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="w-screen py-4 bg-stone-800 text-white flex items-center justify-between px-6 xl:px-80">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <ul className="flex items-center space-x-6">
          {user ? (
            <li>
              <button className="flex items-center" onClick={onLogout}>
                <FaSignOutAlt className="text-3xl" />
                <p>Logout</p>
              </button>
            </li>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
