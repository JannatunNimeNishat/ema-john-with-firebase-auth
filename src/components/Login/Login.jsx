import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required id="" />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p><small>New to Ema-john? <Link to='/signup'>Create New Account</Link></small></p>
            </form>
        </div>
    );
};

export default Login;