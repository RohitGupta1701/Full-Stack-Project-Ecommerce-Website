import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { useAuth } from '../../context/auth';
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import toast from 'react-hot-toast';
// import Dashboard from './../../pages/user/Dashboard';
import SearchInput from '../Form/SearchInput';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../../context/cart';
import { Badge } from "antd";
import '../../styles/Header.css'

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
    })
    localStorage.removeItem("auth");
    toast.success("Logout Successfully")
    // alert("Logout Successfully")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink to="/" className="navbar-brand">:🛒<span className='F'>F</span><span className='B'>a</span>mms-<span className='F'>c</span>art </NavLink>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <SearchInput />
            <li className="nav-item">
              <NavLink to="/" className="nav-link ">Home </NavLink>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to={'/categories'} role="button" data-toggle="dropdown" aria-expanded="false">
                Categories
              </Link>

              <ul className='dropdown-menu'>
                <li>
                  <Link className='dropdown-item' to={'/categories'}>
                    All Categories
                  </Link>
                </li>
                {categories?.map((c) => (
                  <li>
                    <Link className='dropdown-item' to={`/category/${c.slug}`}>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {
              !auth.user ? (<>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link" >Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link" >Login</NavLink>
                </li>
              </>) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                      {auth?.user?.name}
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li className="nav-item"><NavLink className="dropdown-item" to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>Dashboard</NavLink></li>
                      <li className="nav-item"><NavLink onClick={handleLogout} to="/login" className="dropdown-item">Logout</NavLink></li>
                    </div>
                  </li>


                  {/* <li className="nav-item">
                  <NavLink onClick={handleLogout} to="/login" className="nav-link" >Logout</NavLink>
                </li> */}
                </>)
            }

            <li className="nav-item ">
              <NavLink to="/cart" className="nav-link" >
                <Badge count={cart?.length} showZero offset={[10, -5]}>
                  <p className='cart'>Cart</p>
                </Badge>
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
    </>


  )
}

export default Header
