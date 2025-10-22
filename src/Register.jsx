import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import { AuthContext } from "./AuthContext";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const navigate = useNavigate();
  const { signUp,googleSignIn } = useContext(AuthContext)
  const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const handleSignGoogle = () => {
      googleSignIn();
      navigate("/");
    };

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
      if (!passwordRegex.test(password)) {
        setError(
          "Password must contain at least one uppercase letter, one lowercase letter, and be 6+ characters long."
        );
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
                <button
                              type="button"
                              className="btn btn-neutral mt-4 flex items-center justify-center gap-2"
                              onClick={handleSignGoogle}
                            >
                              <FaGoogle /> Sign Up With Google
                            </button>
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
