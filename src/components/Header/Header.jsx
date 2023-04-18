import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                {
                    user ?
                        <>
                            <span className='text-white'>Welcome {user.email}</span>
                            <button onClick={handleSignOut}>Log out</button>
                        </>
                        :
                        <Link to='/login'>LogIn</Link>

                }
            </div>
        </nav>
    );
};

export default Header;