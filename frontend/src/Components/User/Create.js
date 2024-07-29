import React from 'react';
import "./Create.css"
import { useState } from 'react'

const Createform = () => {
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [Cfpassword, setCfpassword] = useState('')
  const [Email, setEmail] = useState('')
  const [Contact, setContact] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {firstName, lastName, Username,Password,Cfpassword,Email,Contact}
    
    const response = await fetch("http://localhost:8080/post-crud", {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setFirstname('')
      setLastname('')
      setUsername('')
      setPassword('')
      setCfpassword('')
      setEmail('')
      setContact('')
      console.log('new workout added:', json)
    }

  }




    return (
      <form className="create" onSubmit={handleSubmit}> 
      {/* <div   className='form'> */}
        <div className="first-name">
            <input
              type='text'
              placeholder="Enter your First name"
              required
              name="firstName"
              onChange={(e) => setFirstname(e.target.value)} 
              value={firstName}
            />
        </div>
        <div className="last-name">
            <input
              type='text'
              placeholder="Enter your Last name"
              required
              name="lastName"
              onChange={(e) => setLastname(e.target.value)} 
              value={lastName}
            />
        </div>
        <div className="User-name">
            <input
              type='text'
              placeholder="Enter username"
              required
              name="Username"
              onChange={(e) => setUsername(e.target.value)} 
              value={Username}
            />
        </div>
        <div className="password">
            <input
              type='password'
              placeholder="Enter your password"
              required
              name="Password"
              onChange={(e) => setPassword(e.target.value)} 
               value={Password}
            />
        </div>
        <div className="repassword">
            <input
              type='password'
              required
              name='Cfpassword'
              placeholder="Enter your password again"
              onChange={(e) => setCfpassword(e.target.value)} 
              value={Cfpassword}
            />
        </div>
        <div className="email">
            <input
              type='email'
              placeholder="Enter your email"
              required
              name="Email"
              onChange={(e) => setEmail(e.target.value)} 
              value={Email}
            />
        </div>
        <div className="phonenumber">
            <input
              type='text'
              placeholder="Enter your phone number"
              required
              name="Contact"
              onChange={(e) => setContact(e.target.value)} 
              value={Contact}
            />
        </div>
        <div className="col-3">
          <select name="gender" id="id_gender">
            <option value="m" >Male</option>
            <option value="f">Female</option>
          </select>
        </div>
        <button>Submit</button>
        {error && <div className="error">{error}</div>}
      </form>
    )
}
export default Createform