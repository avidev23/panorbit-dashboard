import React, { useContext } from "react";
import LeftNav from "../components/LeftNav";
import TopNav from "../components/TopNav";
import { AppContext } from "../contextApi/ContextProvider";
import '../css/Gallery.css'

const Gallery = () => {
  const { setShowProfile } = useContext(AppContext); // getting data from contest api
  return (
    <div className='gallery_page'>
      <LeftNav />

      <div className='gallery_top'>
        <div className='gallery_profile'>
          <h2>Gallery</h2>
          <TopNav />
        </div>

        <hr style ={{ color: "grey", width: "100%" }} />

        <div className='gallery_screen' onClick={() => setShowProfile(false)}>
          <h1 className='ComingSoon'>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
