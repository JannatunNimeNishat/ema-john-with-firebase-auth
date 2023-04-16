import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error,setError] = useState('');
    const handleSignUp = (event) =>{
        setError('');
        event.preventDefault();
        const form= event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);
        //validation
        if(password !== confirm){
            setError('Your password did not match');
            return;
        }
        else if(password.length < 6){
            setError('password should have minimum 6 character')
            return;
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            setError('password should have one Upper case letter');
            return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('password should have two digit');
            return;
        }
        else if(!/(?=.*[a-z].*[a-z])/.test(password)){
            setError('password should have three lowercase letters');
            return;
        }
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required id="" />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" required />
                <p><small>Already have an account ? <Link to='/login'>Login</Link></small></p>
                <p className='text-error'>{error}</p>
            </form>
        </div>
    );
};

export default SignUp;