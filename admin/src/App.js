import './App.scss';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import ProductList from './pages/productList/ProductList';
import User from './pages/user/User';
import Product from './pages/product/Product';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateUser from './pages/createUser/CreateUser';
import CreateProduct from './pages/newProduct/CreateProduct';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';
import Lists from './pages/lists/Lists';
import EditList from './pages/editList/EditList';
import CreateList from './pages/newList/CreateList';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div className="App">
        <Navbar style={!user ? { display: 'none' } : {}} />
        <div className="container">
          <Sidebar style={!user ? { display: 'none' } : {}} />
          <div className="other">
            <Routes>
              <Route path='/' element={user ? <Home /> : <Login />} />
              {user &&
                <>
                  <Route path='/users' element={<UserList />} />
                  <Route path='/movies' element={<ProductList />} />
                  <Route path='/users/:id' element={<User />} />
                  <Route path='/movies/:id' element={<Product />} />
                  <Route path='/newUser' element={<CreateUser />} />
                  <Route path='/new-movie' element={<CreateProduct />} />
                  <Route path='/lists' element={<Lists />} />
                  <Route path='/lists/:id' element={<EditList />} />
                  <Route path='/new-list' element={<CreateList />} />
                </>
              }
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
