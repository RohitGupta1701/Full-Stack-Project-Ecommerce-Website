import React,{useState} from 'react'
import {toast} from "react-toastify";
import axios from 'axios';
import { useNavigate, useLocation} from 'react-router-dom';
import Layout from './../../components/Layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/AuthStyles.css'
import { useAuth } from '../../context/auth';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

     // form handle
     const handleSubmit = async(e) =>{
        e.preventDefault();
     try {
         const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
         {email, password} 
         );
               if( res && res.data.success){
                 toast.success(res.data && res.data.message);
                 setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                 });
                 localStorage.setItem('auth', JSON.stringify(res.data));
                 navigate( location.state || "/");
            //     if(location.state){
            //         navigate("/dashboard")
            //     }
            //     else{
            //         navigate("/")
            //     }
                
               }
               else{
                 toast.error(res.data.message);
               }
     } catch (error) {
         // console.log(error);
         toast.error("Something went wrong.");
     }

 }

  return (
    <Layout title="Register - Ecommerce App">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                <h1 className='title'>Login Form</h1>

                    <div className="form-group">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Your email" required/>   
                    </div>

                    <div className="form-group">
                        <input type="password" value={password}  onChange={(e) =>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" required/>
                    </div>

                  <div className="mt-3">
                  <button type="submit" class="btn btn-primary" onClick={() =>{ navigate("/forgot-password")}}>forgot password</button>
                  </div>
                  <div className="mt-3">
                  <button type="submit" class="btn btn-primary">LOGIN</button>
                  </div>
                   
                   
                </form>
            </div>

        </Layout>
  )
}

export default Login
