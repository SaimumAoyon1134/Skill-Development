import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import { AuthContext } from "./AuthContext";

const Register = () => {
  const { signUp } = useContext(AuthContext)
  const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
   
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      setError("Please give email and password!!");
      return;
    }
    signUp(email, password)
      .then((result) => {
        console.log("ok");
        setSuccess(true);
        e.target.reset();
      })
      .catch((error) => {
        setError("Please Set Properly");
      });
      
    
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />

              <button className="btn btn-neutral mt-4">Register</button>
              {error && <p className="text-red-500">{error}</p>}
              {success && (
                <p className="text-green-500">Successfully Account Created!!</p>
              )}
            </fieldset>
          </form>
          <p>
            Already have any Account?{" "}
            <NavLink
              to="/login"
              className="text-blue-400 hover:text-blue-700 font-bold underline"
            >
              Sign in Now!!!
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
