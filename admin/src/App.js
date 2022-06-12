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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className="other">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/users' element={<UserList />} />
              <Route path='/products' element={<ProductList />} />
              <Route path='/users/:id' element={<User />} />
              <Route path='/products/:id' element={<Product />} />
              <Route path='/newUser' element={<CreateUser />} />
              <Route path='/newProduct' element={<CreateProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
