import React from 'react';
import "./Create.css"
// import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";

const Createform = () => {
  const [create, setCreate] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    Phonenumber: ""
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();
  const handleChange = (e) => {
    setCreate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/post-crud", create);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };


    return (
      <div   className='form'>
        <div className="first-name">
            <input
              type='text'
              placeholder="Enter your First name"
              name="firstname"
              onChange={handleChange}
            />
        </div>
        <div className="last-name">
            <input
              type='text'
              placeholder="Enter your Last name"
              name="lastname"
              onChange={handleChange}
            />
        </div>
        <div className="password">
            <input
              type='password'
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
            />
        </div>
        <div className="repassword">
            <input
              type='password'
              placeholder="Enter your password again"
              onChange={handleChange}
            />
        </div>
        <div className="email">
            <input
              type='text'
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
            />
        </div>
        <div className="phonenumber">
            <input
              type='text'
              placeholder="Enter your phone number"
              name="phonenumber"
              onChange={handleChange}
            />
        </div>
        <div className="col-3">
          <select name="gender" id="id_gender">
            <option value="m" >Male</option>
            <option value="f">Female</option>
          </select>
        </div>
        <button onClick={handleClick}>submit</button>
        {error && "Something went wrong!"}
      </div>
    )
}
export default Createform