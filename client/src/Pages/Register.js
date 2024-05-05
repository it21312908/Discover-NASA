// import React, { useState, useContext } from 'react'
// import { Link } from 'react-router-dom'

// import {ToastContainer, toast} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import loginImage from '../assets/login-image3.jpg';

// import AuthContext from '../context/AuthContext';

// export default function Register() {

//   const { registerUser } = useContext(AuthContext);

//     const [credentials , setCredentials] = useState({
//         name:"",
//         email:"",
//         password:"",
//         confirmPassword: ""
//     })

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
    
//         setCredentials({ ...credentials, [name]: value });
//       };

//       const handleSubmit = (event) => {
//         event.preventDefault();

//         if(!credentials.email || !credentials.password || !credentials.name || !credentials.confirmPassword){
//           toast.error("please enter the required fields");
//           return;
//         }

//         if(credentials.password !== credentials.confirmPassword){
//           toast.error("Password do not match");
//           return;
//         }

//         const userData = {...credentials, confirmPassword: undefined}
//         registerUser(userData)
//       }

//   return (
//     <>
//     <ToastContainer autoClose={2000}/>
//     <h3>Register</h3>
//     <img src={loginImage} alt="Login" className="login-image" />
//     <form onSubmit={handleSubmit}>
//         <div class="form-group">
//           <label for="nameInput" class="form-label mt-4">
//             Your Name
//           </label>
//           <input
//             type="text"
//             class="form-control"
//             id="nameInput"
//             name="name"
//             value={credentials.name}
//             onChange={handleInputChange}
//             placeholder="John Doe"
//             required
//           />
//         </div>
//         <div class="form-group">
//           <label for="emailInput" class="form-label mt-4">
//             Email address
//           </label>
//           <input
//             type="email"
//             class="form-control"
//             id="emailInput"
//             aria-describedby="emailHelp"
//             name="email"
//             value={credentials.email}
//             onChange={handleInputChange}
//             placeholder="johndoe@example.com"
//             required
//           />
//         </div>
//         <div class="form-group">
//           <label for="passwordInput" class="form-label mt-4">
//             Password
//           </label>
//           <input
//             type="password"
//             class="form-control"
//             id="passwordInput"
//             name="password"
//             value={credentials.password}
//             onChange={handleInputChange}
//             placeholder="Enter Password"
//             required
//           />
//         </div>
//         <div class="form-group">
//           <label for="confirmPassword" class="form-label mt-4">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             class="form-control"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={credentials.confirmPassword}
//             onChange={handleInputChange}
//             placeholder="Enter Password"
//             required
//           />
//         </div>
//         <input
//           type="submit"
//           value="Register"
//           className="btn btn-primary my-3"
//         />
//         <p>
//           Already have an account ? <Link to="/login">Login</Link>
//         </p>
//       </form>
//   </>
//   )
// }
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../context/AuthContext';
import loginImage from '../assets/login-image3.jpg'; // Import your image file

export default function Register() {
  const { registerUser } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!credentials.email || !credentials.password || !credentials.name || !credentials.confirmPassword) {
      toast.error('Please enter all required fields');
      return;
    }

    if (credentials.password !== credentials.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const userData = { ...credentials, confirmPassword: undefined };
    registerUser(userData);
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="login-container">
        <img src={loginImage} alt="Register" className="login-image" />
        <div className="login-form">
          <h3>Register</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nameInput" className="form-label mt-4">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                name="name"
                value={credentials.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailInput" className="form-label mt-4">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                aria-describedby="emailHelp"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                placeholder="johndoe@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput" className="form-label mt-4">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label mt-4">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={credentials.confirmPassword}
                onChange={handleInputChange}
                placeholder="Enter Password"
                required
              />
            </div>
            <input type="submit" value="Register" className="btn btn-dark my-3" />
            <p>
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}


