import React, {useEffect, useState} from 'react';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "./App.css";
import axios from "axios";


function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, {withCredentials: true});
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getUser();
  }, [])

  return (
    <div className="container">
      <Routes>
        <Route exact path="/login" element={user ? <Navigate to = "/" /> : <Login />} />
        <Route exact path='/home'element={user ? <Home user={user} /> : <Home />} />
      </Routes>
    </div>
  );
}

export default App;
