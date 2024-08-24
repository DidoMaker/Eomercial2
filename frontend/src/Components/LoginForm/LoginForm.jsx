import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import loginService from "../../Service/loginService"
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"></link>


const LoginForm = () => {

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const [message,setMessage] = useState(null)

    
    const handleSubmit = async (e) => {
    setMessage("");
    e.preventDefault()
    setUsername('')
    setPassword('')
    try {
        let data = await loginService.handleLoginAPI(Username, Password);
        if (data && data.errCode !== 0) {
            setMessage(data.message)
        }
    } catch (error) {
        console.log(error)
    }
    console.log(message)
    }



        return (
            <form className="wrapper" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required
                        value={Username}
                        onChange={(e) => setUsername(e.target.value)} 
                        />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)} 
                        />
                        <FaLock className="icon"/>

                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />Remember me
                        </label>
                        <a href="http://localhost:3000/forget">forgot password</a>
                    </div>
                    <div className=''>
                        <button>Submit</button>
                    </div>
                    
                    <div className="register-link">
                        <p>Don't have account? <a href="http://localhost:3000/create">Register</a></p>
                    </div>
                    <div className="another-account">
                        <span className="text center">Or login with</span>
                    </div>
                    <div className="social-link">
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"></link>
                        <i class="fa-brands fa-google-plus-g google"></i>
                        <i class="fa-brands fa-facebook-f facebook"></i>
                    </div> 
                    <div>
                    <a href='http://localhost:3000/admin'>login as admin</a>
                    </div>
                    {message && <div className="error">{message}</div>}
            </form>
        );
    }
export default LoginForm;