import React from 'react';
import "./Create.css"
// import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useState } from 'react'

const Createform = () => {
  const [Signup, setSignup] = useState('')
  const [Password, setPassword] = useState('')
  const [Email, setEmails] = useState('')
  const [Phonenumber, setPhonenumber] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleonLogin = async (e) => {
    e.preventDefault()

    const workout = {Signup, Password, Email, Phonenumber}
    
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setSignup('')
      setEmails('')
      setPhonenumber('')
      setPassword('')
      console.log('new workout added:', json)
    }

  }


    return (
      <form className='signup' onSubmit={handleonLogin}>
        <div className="first-name">
            <input
              type='text'
              placeholder="Enter your First name"
              onChange={(e) => setSignup(e.target.value)} 
              value={Signup} 
              className={emptyFields.includes('signup') ? 'error' : ''}
            />
        </div>
        <div className="last-name">
            <input
              type='text'
              placeholder="Enter your Last name"
              onChange={(e) => setSignup(e.target.value)} 
              value={Signup} 
              className={emptyFields.includes('signup') ? 'error' : ''}
            />
        </div>
        <div className="password">
            <input
              type='password'
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)} 
              value={Password} 
              className={emptyFields.includes('password') ? 'error' : ''}
            />
        </div>
        <div className="repassword">
            <input
              type='password'
              placeholder="Enter your password again"
              className={emptyFields.includes('confirmpassword') ? 'error' : ''}
            />
        </div>
        <div className="email">
            <input
              type='text'
              placeholder="Enter your email"
              onChange={(e) => setEmails(e.target.value)} 
              value={Email} 
              className={emptyFields.includes('email') ? 'error' : ''}
            />
        </div>
        <div className="phonenumber">
            <input
              type='text'
              placeholder="Enter your phone number"
              onChange={(e) => setPhonenumber(e.target.value)} 
              value={Phonenumber} 
              className={emptyFields.includes('phonenumber') ? 'error' : ''}
            />
        </div>
        <div className="col-3">
          <select name="gender" id="id_gender">
            <option value="m" >Male</option>
            <option value="f">Female</option>
          </select>
        </div>
        <div className='btncreate'>
              <button>Create</button>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
    )
}
export default Createform