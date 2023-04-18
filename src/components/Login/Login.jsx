import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Login = () => {
    const {logIn} = useContext(AuthContext);
    const [error,setError] = useState('');
    const [success, setSuccess] = useState('');
    //redirect user after login
    const navigate = useNavigate();
    //getting the intended location before login
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    
    //show password
    const [show, setShow] = useState(false);


    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //
        setError('')
        setSuccess('')
        // console.log(email,password);
        logIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            setSuccess('successfully logged In');
            form.reset();
            // navigate('/')
            navigate(from,{replace:true});
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    {/* dynamic input type */}
                    <input type={show ? 'text' : 'password'} name="password" required id="" />

                    {/* show password */}
                    <p onClick={()=> setShow(!show)}>
                        <small>
                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>
                            }
                        </small>
                    </p>

                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p><small>New to Ema-john? <Link to='/signup'>Create New Account</Link></small></p>
                <p className='text-success'>{success}</p>
                <p className='text-error'>{error}</p>
            </form>
        </div>
    );
};

export default Login;