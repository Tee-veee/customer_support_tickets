import axios from "axios";

const API_URL = "/api/users";

// Register User
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// holds functions to export
const authService = {
  register,
};

export default authService;
