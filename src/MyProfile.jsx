import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "animate.css";

const MyProfile = () => {
    const navigate =useNavigate()
    const { user,isLoading } = useContext(AuthContext);
    if (!user) {
        navigate("/")
    }
      if (isLoading) {
        return (
          <Loading></Loading>
        );
      }
  return (
    <div className="flex flex-col items-center justify-center mt-3 animate__animated animate__fadeInDown">
      <div className="w-[100px] h-[100px] ">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="User"
            className="w-full h-full object-cover rounded-full shadow-2xl shadow-black"
          />
        ) : (
          <FaRegUserCircle className="text-8xl" />
        )}
      </div>
      <div className="flex flex-col items-center">
        <div className="overflow-x-auto mt-6">
          <table className="table w-full max-w-md mx-auto bg-base-100 shadow-md rounded-xl">
            <thead>
              <tr className="bg-black text-neutral-content">
                <th colSpan={2} className="text-center text-lg font-semibold">
                  My Information
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover">
                <td className="font-medium">User Name</td>
                <td>{user?.displayName || "N/A"}</td>
              </tr>
              <tr className="hover">
                <td className="font-medium">Email</td>
                <td>{user?.email || "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-neutral mt-4"
          onClick={() => {
            navigate("/update");
          }}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
