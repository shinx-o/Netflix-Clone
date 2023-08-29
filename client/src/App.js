import './App.scss';
import React, { useContext } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './pages/register/Register'
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import { AuthContext } from './context/authContext/AuthContext';


function App() {
  const type = Math.random() === 0 ? "series" : "movie";
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <Home type={type} /> : <Login />} />
          <Route path="/signup" element={<Register />} />
          <Route to='/login' element={<Login />} />
          {user && (
            <>
              <Route path="/browse" element={<Home type={type} />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/movies" element={<Home type="movie" />} />
              <Route path="/watch" element={<Watch />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
