import axios from 'axios';
import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import googleIcon from '../../../assets/images/google.png';
import logo from '../../../assets/images/vn-logo.png';
import auth from '../../../firebase.init';
import './Register.css';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const onSubmitRegister = data => {
          const email = data.email;
          const password = data.password;
          ( async () => {
            await axios.post('http://localhost:5000/new-user', data)
            .then(res => {
                console.log(res);
                createUserWithEmailAndPassword(email, password)
                navigate('/');
                toast('Registration Successful');
            });
          })();
      };

    return (
        <div className='container vn-register-wraper mt-4 d-flex flex-column align-items-center border p-4 rounded-3 shadow'>
            <div className='mb-4'>
                <img src={logo} style={{height: '60px'}} alt="" />
            </div>
            <form onSubmit={handleSubmit(onSubmitRegister)}>

                <input type="text" placeholder="Full Name" {...register("fullName", {required: true, maxLength: 80})} className='vn-input my-2' />
                <input type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} className='vn-input my-2' />
                <input type="tel" placeholder="Mobile number" {...register("mobileNumber", {required: true, minLength: 6, maxLength: 12})} className='vn-input my-2' />
                <input type="password" placeholder="Password" {...register("password", {required: true})} className='vn-input my-2' />
                <input type="password" placeholder="Confirm Password" {...register("confirmPassword", {required: true})} className='vn-input my-2' />
                <input type="submit"  className='my-2 w-100'/>
            </form>

            <div className='d-flex align-items-center justify-content-between my-3'>
                <span style={{height: '1px', width: '40px', backgroundColor: 'gray'}}></span>
                <span className='mx-3'>Or</span>
                <span style={{height: '1px', width: '40px', backgroundColor: 'gray'}}></span>
            </div>

            <button className='vn-input my-2 border-0 rounded py-1'>
                <img src={googleIcon} style={{height: '25px', marginRight: '8px'}} alt="" />
                Register With Google  
            </button>
        </div>
    );
};

export default Register;