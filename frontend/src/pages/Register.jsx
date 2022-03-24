// REACT
import { useState, useEffect } from "react";
// ROUTER
import { useNavigate } from "react-router-dom";
// ASSETS
import { FaUser } from "react-icons/fa";
// TOAST
import { toast } from "react-toastify";
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { registerUser, reset } from "../features/auth/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // redirect when logged in
    if (isSuccess && user) {
      toast.success("Succesfully registered");
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

    if (password !== password2) {
      toast.error("Passwords do not match!");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(registerUser(userData));
    }
  };

  return (
    <div className="px-6 xl:px-[400px]">
      {/* INTRO TEXT */}
      <section className="w-full my-10">
        <div className="flex items-center justify-center space-x-2 text-3xl">
          <FaUser />
          <h2>Register</h2>
        </div>
      </section>

      <section>
        <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
          <div className="w-full flex flex-col xl:w-6/12 xl:mx-auto">
            <label className="text-sm mb-1">Name</label>
            <input
              type="text"
              className="w-full p-1 outline-none focus:shadow-xl focus:transition-all"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="w-full flex flex-col xl:w-6/12 xl:mx-auto">
            <label className="text-sm mb-1">Confirm password</label>
            <input
              type="password"
              className="w-full p-1 outline-none focus:shadow-xl focus:transition-all"
              id="password2"
              name="password2"
              value={password2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="bg-green-400 rounded-lg w-full xl:w-6/12 py-2 px-1 hover:scale-[.98] hover:transition-all mt-4 text-xl">
              Submit!
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
