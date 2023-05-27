import React, { useContext } from "react";
import LeftNav from "../components/LeftNav";
import TopNav from "../components/TopNav";
import { AppContext } from "../contextApi/ContextProvider";
import '../css/Posts.css'

const Posts = () => {
  const { setShowProfile } = useContext(AppContext); 
  return (
    <div className='posts_page'>
      <LeftNav />
      <div className='posts_top'>
        <div className='posts_profile'>
          <h2>Posts</h2>
          <TopNav />
        </div>

        <hr style ={{ color: "grey", width: "100%" }} />

        <div className='posts_screen' onClick={() => setShowProfile(false)}>
          <h1 className='ComingSoon'>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default Posts;
