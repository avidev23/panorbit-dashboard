import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LeftNav from "../components/LeftNav";
import ProfileBottom from "../components/ProfileBottom";
import TopNav from "../components/TopNav";
import { AppContext } from "../contextApi/ContextProvider";
import '../css/Homepage.css'

const Homepage = () => {
  const { profileData, getFilterData, setShowProfile } =
    useContext(AppContext); 
  const { id } = useParams();
  sessionStorage.setItem("id", id);
 
  useEffect(() => {
    let ID = sessionStorage.getItem("id") || 1;
    getFilterData(ID);
  }, [id]);

  return (
    <div>
      <div className='HomeMain'>
        <LeftNav />
        {profileData &&
          profileData.map((el) => (
            <div
              style={{ width: "80%" }}
              className='profile_top'
              key={el.id}
            >
              <div className='profile'>
                <h2>Profile</h2>
                <TopNav />
              </div>

              <hr />
              <div onClick={() => setShowProfile(false)}>
                <ProfileBottom {...el} />
              </div> 
            </div>
          ))}
      </div>
    </div>
  );
};

export default Homepage;
