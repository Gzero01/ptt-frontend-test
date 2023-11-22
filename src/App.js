import { React, createContext, useEffect, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";

const AuthContext = createContext("");
export { AuthContext };

export default function App() {
  const [auth, setAuth] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("Auth"));

    const countData = JSON.parse(localStorage.getItem("Count"));

    if (authData) {
      setAuth(authData);
    }
    if (countData) {
      setCount(countData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Auth", JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    localStorage.setItem("Count", JSON.stringify(count));
  }, [count]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, count, setCount }}>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContext.Provider>
  );
}

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/"> GO Home </Link>
  </div>
);
