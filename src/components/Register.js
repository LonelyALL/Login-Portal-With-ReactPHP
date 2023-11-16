import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

export default function Register(){

    const [inputs, setInputs] = useState({});

    function handleSubmit(event){
        event.preventDefault();
        const pass = document.getElementById('password').value;
        const repass = document.getElementById('repass').value;

        if(!(pass == repass)){
            toast.error("Login and Password are not the same !");
            return;
        }

        const data = async () =>{
            const response = await axios.post('http://localhost/portalreactphp/api-php/register.php', inputs);

            if(response.data.error == true){
                toast.error(response.data.message);
            }
            else{
                toast.success(response.data.message);
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
        <>
        <div className="container">
            <form method='post' onSubmit={handleSubmit}>
                <div className='box'>
                    <h2>Sign Up</h2>
                    <span>Login:</span>
                    <input type="text" name='login' placeholder='Login' minLength="4" maxLength="18" onChange={handleChange} required="true"/>

                    <span>Password:</span>
                    <input type="text" name='pass' placeholder='Password' minLength="4" maxLength="18" id="password" onChange={handleChange} required="true"/>
                    
                    <span>Re-Password:</span>
                    <input type="text" id="repass" placeholder='Re-Password' minLength="4" maxLength="18" onChange={handleChange} required="true"/>

                    <button type="submit">Sign Up</button>
        
                </div>
            </form>
        </div>
        </>
    )
}