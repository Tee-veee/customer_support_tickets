// REACT
import { useEffect, useState } from "react";
// ASSETS
import { FaSignInAlt } from "react-icons/fa";
// TOAST
import { toast } from "react-toastify";
// ROUTER
import { useNavigate } from "react-router-dom";
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { loginUser, reset } from "../features/auth/authSlice";
// COMPONENTS
import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // redirect when logged in
    if (isSuccess && user) {
      toast.success("Succesfully logged in!");
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(loginUser(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="px-6 xl:px-[400px]">
      {/* INTRO TEXT */}
      <section className="w-full my-10">
        <div className="flex items-center justify-center space-x-2 text-3xl">
          <FaSignInAlt />
          <h2>Login!</h2>
        </div>
      </section>

      <section>
        <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
          <div className="w-full flex flex-col xl:w-6/12 xl:mx-auto">
            <label className="text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full p-1 outline-none focus:shadow-xl focus:transition-all"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex flex-col xl:w-6/12 xl:mx-auto">
            <label className="text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full p-1 outline-none focus:shadow-xl focus:transition-all"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="bg-green-400 rounded-lg w-full xl:w-6/12 py-2 px-1 hover:scale-[.98] hover:transition-all mt-4">
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
