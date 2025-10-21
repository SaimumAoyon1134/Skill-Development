import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import ContinuousSwiper from './ContinuousSwiper';
import PopularSkills from './PopularSkills';

const Home = () => {
  const { user } = useContext(AuthContext)
  
  return (
    <div className="">
      <ContinuousSwiper />
      <PopularSkills/>
    </div>
  );
}

export default Home
