import React from 'react';
import { FaUser,FaEnvelope,FaLock } from "react-icons/fa";
import '../common/Signup.css'
 export const Signup=()=> {
    return(
        <div className='wrapper'>
<div className="main">
      <h2>Signup Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="first">First Name:</label>
          <input type="text" id="first" name="first"  />
          <FaUser className="icon"/>
        </div>
        <div className="form-group">
          <label htmlFor="last">Last Name:</label>
          <input type="text" id="last" name="last"  />
          <FaUser className="icon"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"  />
          <FaEnvelope  className="icon"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"  />
          <FaLock className="icon"/>
        </div>
      <div className='remember-forgot'>
        <label><input type='checkbox' /> remember me </label>
        <a href='#'>Forgot password</a>
      </div>
        <button type='submit'>Login</button>
        <div className='register-link'>
          <p>on't have an account ? <a href='#'>Register</a></p>
        </div>
      </form>
    </div>
  </div>      
  
    );

};
export default Signup;