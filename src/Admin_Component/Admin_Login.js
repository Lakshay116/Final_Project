
import React, { useState } from 'react';
import '../css/beforelogin_admin.css';
import '../css/Login.css';
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";


const Admin_Login = () => {

    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [password, setPasword] = useState('');


    const emailChangeHandler = (e) => {
        setMail(e.target.value)
        console.log(mail)
    }
    const passwordChangeHandler = (e) => {
        setPasword(e.target.value)
        console.log(password)
    }


    const login = async () => {
        await fetch("http://localhost:5001/api/admin/login", {
            method: "POST",
            body: JSON.stringify({
                email: mail,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then(response => response.json()).then(data => {
            console.log(data)
            if (data['msg'] === "Logged In") {
                console.log("Logged In success")
                navigate('/admin/user')
            }
            else {
                console.log("user Not Verified")
            }

        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='login_main' >
                    <div className='login_div'>
                        <h1 style={{ color: 'orangered' }}>Log In</h1>
                        <div className='login_form'  >
                            <input name="email" type="text" className="login_input" placeholder="Email" onChange={emailChangeHandler} />
                            <div style={{ width: '70%', height: '2px', backgroundColor: 'orangered', marginLeft: '15%' }}></div>
                            <input name="password" type="text" className="login_input" placeholder="Password" onChange={passwordChangeHandler} />
                            <div style={{ width: '70%', height: '2px', backgroundColor: 'orangered', marginLeft: '15%' }}></div>
                            <button class="submit-contact" style={{ marginTop: '10vh' }} onClick={login}>Login</button>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};
export default Admin_Login;
