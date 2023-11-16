import React from 'react';
import { Routes, Route, BrowserRouter, Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register'
import Home from './Home'

export default function NavBar(){
    return(
        <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Login</Link>
                    </li>
                    <li>
                        <Link to='/user/register'>Register</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/user/register' element={<Register />} />
                <Route path='/user/home' element={<Home />} />
            </Routes>
        </div>
    </BrowserRouter>
    )
}