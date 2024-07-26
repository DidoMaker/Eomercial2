import React from 'react';
import "./Forget.css"

export default function Forget() {
    return (
      <div className='Forget'>
        <div className="user-name">
            <input
              type='text'
              placeholder="Enter your user name"
            />
        </div>
        <div className="email">
            <input
              type='text'
              placeholder="Enter your email"
            />
        </div>
        <div className="phonenumber">
            <input
              type='text'
              placeholder="Enter your phone number"
            />
        </div>
      </div>
    )
  } 