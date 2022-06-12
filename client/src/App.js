import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './pages/register/Register'
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';

function App() {
  const user = true;
  const type = Math.random() === 0 ? "series" : "movies";
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <Home type={type} /> : <Register />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={!user ? <Login /> : <Register />} />
          {user && (
            <>
              <Route path="/browse" element={<Home type={type} />} />
              <Route path="/series" element={<Home type={"series"} />} />
              <Route path="/movies" element={<Home type={"movies"} />} />
              <Route path="/watch" element={<Watch />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
