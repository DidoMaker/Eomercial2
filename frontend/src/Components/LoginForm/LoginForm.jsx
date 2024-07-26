import React, { Component } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"></link>

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    handleonChangeUsername = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    handleonChangePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    }
    handleonLogin = () => {
        console.log('username:' + this.state.username)
        console.log('password: '+this.state.password)
    }
    render(){
        return (
            <div className="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required
                        value={this.state.username}
                        onChange={(event) => this.handleonChangeUsername(event)}
                        />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required
                        value={this.state.password}
                        onChange={(event) => this.handleonChangePassword(event)}
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
                        <button type="submit" onClick= {() => {this.handleonLogin() }}>login</button>
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
                </form>
            </div>
        );
    }
};
export default LoginForm;