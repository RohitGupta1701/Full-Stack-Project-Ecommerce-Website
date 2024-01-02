import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
// import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminDashboard from "./pages/Admin/AdminDashboard";
// import AdminRoute from "./components/Routes/AdminRoute";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import User from "./pages/Admin/User";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products.js";
import UpdateProduct from "./pages/Admin/UpdateProduct.js";
import Search from "./pages/Search.js";
import ProductDetails from "./pages/ProductDetails.js";
import Categories from "./pages/Categories.js";
import CategoryProduct from "./pages/CategoryProduct.js";
import CartPage from "./pages/CartPage.js";
import AdminOrder from "./pages/Admin/AdminOrder.js";

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/product/:slug" element={<ProductDetails/>}/>
    <Route path="/categories" element={<Categories/>}/>
    <Route path="/category/:slug" element={<CategoryProduct/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/search" element={<Search/>}/>

             {/* user */}
    {/* <Route path="/dashboard" element={<PrivateRoute/>}>
      <Route path="user" element={<Dashboard/>}/>
      <Route path="user/orders" element={<Orders/>}/>
      <Route path="user/profile" element={<Profile/>}/>
    </Route> */}
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/dashboard/user" element={<Dashboard/>}/>
    <Route path="/dashboard/user/orders" element={<Orders/>}/>
    <Route path="/dashboard/user/profile" element={<Profile/>}/>

                 {/* Admin */}
    {/* <Route path="/dashboard" element={<AdminRoute/>}>
     <Route path="admin" element={<AdminDashboard/>}/>
     <Route path="admin/create-category" element={<CreateCategory/>}/>
     <Route path="admin/create-product" element={<CreateProduct/>}/>
     <Route path="admin/products" element={<Products/>}/>
     <Route path="admin/users" element={<User/>}/>
    </Route> */}
    {/* <Route path="/dashboard" element={<AdminRoute/>}/> */}
    <Route path="/dashboard/admin" element={<AdminDashboard/>}/>
    <Route path="/dashboard/admin/create-category" element={<CreateCategory/>}/>
    <Route path="/dashboard/admin/create-product" element={<CreateProduct/>}/>
    <Route path="/dashboard/admin/product/:slug" element={<UpdateProduct/>}/>
    <Route path="/dashboard/admin/products" element={<Products/>}/>
    <Route path="/dashboard/admin/users" element={<User/>}/>
    <Route path="/dashboard/admin/orders" element={<AdminOrder/>}/>

    <Route path="/register" element={<Register/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/policy" element={<Policy/>}/>
    <Route path="*" element={<Pagenotfound/>}/>
   </Routes>
   </>
  );
}

export default App;
