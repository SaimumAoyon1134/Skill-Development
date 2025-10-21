import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import ContinuousSwiper from './ContinuousSwiper';
import PopularSkills from './PopularSkills';
import Loading from './Loading';
import PopularCategories from './PopularCategories';

const Home = () => {
  const { user, isLoading } = useContext(AuthContext)
  if (isLoading) {
    return (
      <Loading/>
    )
  }
  
  return (
    <div className="">
      <ContinuousSwiper />
      <PopularSkills />
      <PopularCategories/>
    </div>
  );
}

export default Home
