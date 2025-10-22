import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import { AuthContext } from "./AuthContext";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import "animate.css";
const Register = () => {
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const navigate = useNavigate();
  const { signUp,googleSignIn, update } = useContext(AuthContext)
  const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const handleSignGoogle = () => {
      googleSignIn();
      navigate("/");
    };
  const [showPassword, setShowPassword] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const image = e.target.image.value;
    
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
        if (name || image) {
          update(name, image);
        }
        e.target.reset();
        navigate("/");

      })
      .catch((error) => {
        setError("Please Set Properly");
      });
      
    
  };
  return (
    <div className=" animate__animated animate__fadeInDown">
      <h1 className="mt-4 font-bold text-3xl text-center ">Register Now!!</h1>
      <div className="hero ">
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
                 <div className="relative">
                                  <input
                                    type={showPassword ? "text" : "password"}
                                    className="input pr-10 h-12"
                                    placeholder="Password"
                                    name="password"
                                  />
                                  <span
                                    className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                  >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                  </span>
                                </div>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Your Name"
                  name="name"
                />
                <label className="label">Image</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Your Image URL"
                  name="image"
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
                  <p className="text-green-500">
                    Successfully Account Created!!
                  </p>
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
    </div>
  );
};

export default Register;
