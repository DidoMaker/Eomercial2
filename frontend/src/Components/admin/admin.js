import './admin.css';
import React, { Component } from 'react';
import axios from 'axios'


class Admin extends Component{


    state = {
        posts: []
      }
      componentDidMount= () =>{
        axios.get('http://localhost:8080/get-crud')
          .then(res => {
            console.log(res);
            this.setState({
              posts: res.data.slice(0,10)
            });
          })
      }
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




