import React from 'react';
import { useForm } from "react-hook-form";
import googleIcon from '../../../assets/images/google.png';
import logo from '../../../assets/images/vn-logo.png';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='container vn-register-wraper mt-4 d-flex flex-column align-items-center border p-4 rounded-3 shadow'>
            <div className='mb-4'>
                <img src={logo} style={{height: '60px'}} alt="" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} placeholder='Email' className='vn-input my-2' /> <br />
                <input {...register("password")} placeholder='Password' className='vn-input my-2' /> <br />
                <input type="submit"  className='my-2 w-100'/>
            </form>

            <div className='d-flex align-items-center justify-content-between my-3'>
                <span style={{height: '1px', width: '40px', backgroundColor: 'gray'}}></span>
                <span className='mx-3'>Or</span>
                <span style={{height: '1px', width: '40px', backgroundColor: 'gray'}}></span>
            </div>

            <button className='vn-input my-2 border-0 rounded py-1'>
                <img src={googleIcon} style={{height: '25px', marginRight: '8px'}} alt="" />
                Login With Google  
            </button>
        </div>
    );
};

export default Login;