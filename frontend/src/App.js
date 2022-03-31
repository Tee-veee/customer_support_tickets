// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import NewTicket from "./pages/NewTicket";
// COMPONENTS
import Header from "./components/Header";
// TOAST
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <div className="min-w-screen min-h-screen bg-slate-300">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/new-ticket" element={<PrivateRoute />}>
              <Route path="/new-ticket" element={<NewTicket />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
