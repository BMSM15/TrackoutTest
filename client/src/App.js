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
        <Route exact path='/'element={user ? <Home user={user} /> : <Navigate to = "/login" />} />
      </Routes>
    </div>
  );
}

export default App;
