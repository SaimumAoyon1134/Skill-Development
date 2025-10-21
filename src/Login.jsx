import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "./AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const emailRef = useRef("");
  const { signIn, reset, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      reset(email);
      toast.info("Password reset email sent!");
    } else {
      toast.error("Please enter your email first!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      setError("Please give correct email and password!!");
      return;
    }

    signIn(email, password)
      .then(() => {
        toast.success("Successfully Logged In!");
        e.target.reset();
        navigate("/");
      })
      .catch(() => {
        setError("Invalid Credentials!!");
        toast.error("Invalid Credentials!!");
      });
  };
  const handleSignGoogle = () => {
    googleSignIn();
    navigate("/");
  };

  return (
    <div className="hero ">
      <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                ref={emailRef}
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />

              <div onClick={handleForgetPassword}>
                <a className="link link-hover underline">Forgot password?</a>
              </div>

              <button className="btn btn-neutral mt-4">Login</button>
              <button
                className="btn btn-neutral mt-4"
                onClick={handleSignGoogle}
              >
                <FaGoogle></FaGoogle>Login With Google
              </button>

              {error && <p className="text-red-500 mt-2">{error}</p>}
            </fieldset>
          </form>
          <p>
            Does not have any Account?{" "}
            <NavLink
              to="/register"
              className="text-blue-400 hover:text-blue-700 font-bold underline"
            >
              Sign Up Now!!!
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
