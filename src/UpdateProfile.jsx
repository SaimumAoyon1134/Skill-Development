import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {
  const navigate =useNavigate()
  const {update,isLoading} =useContext(AuthContext)
  const handleSubmit = (e) => { 
    e.preventDefault()
    const name = e.target.name.value;
    const image = e.target.image.value;
    update(name, image)
    e.target.reset()
    navigate("/myprofile")



  }
 if (isLoading) {
   return <Loading></Loading>;
 }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                name="name"
                required
              />
              <label className="label">Image</label>
              <input
                type="text"
                className="input"
                placeholder="Your Image URL"
                name="image"
              
              />

              <button className="btn btn-neutral mt-4">Update </button>
             
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile
