import './admin.css';
import React, { Component } from 'react';
import axios from 'axios'


class Admin extends Component{


    
    render(){
        return(
            <div className="admin">
            <div className="Username">
                <input
                    type="text"
                    placeholder="Admin Username"
                />
            </div>
            <div className="password">
                <input
                    type="password"
                    placeholder="Admin Password"
                />
            </div>
            <div className="submit">
                <button type="submit" onClick={() => {this.handleonLogin()}}>Login</button>
            </div>
        </div>
        );
    }
};
export default Admin;




