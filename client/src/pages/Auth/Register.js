import React,{useState} from 'react'
import {toast} from "react-toastify";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from './../../components/Layout/Layout';
// import toast from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/AuthStyles.css'

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    // form handle
    const handleSubmit = async(e) =>{
           e.preventDefault();
        //    console.log(name, email, password, phone, address);
        //    toast.success("Register Successfully...")
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
            {name, email, password, phone, address,answer} 
            );
                  if(res && res.data.success){
                    toast.success( res.data && res.data.message)
                    navigate("/login");
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
                <h1 className='title'>Register Form</h1>
                   <div className="form-group">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputtext1"  placeholder="Enter Your Name" required/>   
                    </div>

                    <div className="form-group">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" placeholder="Enter Your email" required/>   
                    </div>

                    <div className="form-group">
                        <input type="password" value={password}  onChange={(e) =>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" required/>
                    </div>

                    <div className="form-group">
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} class="form-control" id="exampleInputtextphone1" placeholder="Enter Your Phone" required/>
                    </div>
                    <div className="form-group">
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} class="form-control" id="exampleInputtextaddress1" placeholder="Enter Your Address" required/>
                    </div>
                    <div className="form-group">
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} class="form-control" id="exampleInputtextaddress1" placeholder="What is Your Favorite sports" required/>
                    </div>

                    <button type="submit" class="btn btn-primary">REGISTER</button>
                </form>
            </div>

        </Layout>
    )
}

export default Register;
