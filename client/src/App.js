import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Introduction from "./pages/Introduction/Introduction";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
        const { data } = await axios.get(url, { withCredentials: true });
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleLogout = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/logout`;
      await axios.get(url, { withCredentials: true });
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="container">
      <Routes>
        {/*<Route
          path="/login"
          element={
            user ? <Navigate to="/" replace /> : <Login setUser={setUser} />
          }
        />
        <Route
          path="/"
          element={
            user ? (
              <Home user={user} logout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />*/}
        <Route
          path="/"
          element={
           <Introduction sidebar={sidebar} setSidebar={setSidebar}  />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
