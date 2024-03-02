import React, {useEffect, useState} from 'react';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { history } from "./_helpers";
import { PrivateRoute } from "./components/PrivateRoute";
import axios from "axios";

function App() {
  history.navigate = useNavigate();
  history.location = useLocation();
  const [backendData, setBackData] = useState(null);

  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, {withCredentials: true});
      setUser(data.user._json);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getUser();
  }, [])

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={user ? <Navigate to = "/" /> : <Login />} />
      <Route path='/'element={user ? <Home user={user} /> : <Navigate to = "/login" />} />
    </Routes>
  );
}

export default App;
