import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

export default function Login(){
    
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();

        const data = async () =>{
            const response = await axios.post('http://localhost/portalreactphp/api-php/login.php', inputs);
            if(response.data.error == true){
                toast.error(response.data.message);
            }
            else{
                navigate('/user/home');
            }
        }

        data();
    }
    
    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    return(
        <div className="container">
            <form method='post' onSubmit={handleSubmit}>
                <div className='box'>
                    <h2>Sign In</h2>
                    <span>Login:</span>
                    <input type="text" name='login' placeholder='Login' minLength="4" maxLength="18" onChange={handleChange} required="true"/>

                    <span>Password:</span>
                    <input type="text" name='pass' placeholder='Password' minLength="4" maxLength="18" onChange={handleChange} required="true"/>

                    <button type="submit">Sign In</button>
                </div>
            </form>
        </div>
    )
}