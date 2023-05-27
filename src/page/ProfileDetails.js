import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GetProfiles from "../components/GetProfiles";
import { AppContext } from "../contextApi/ContextProvider";
import '../css/ProfileDetails.css'

const ProfileDetails = () => {
  const { profileData, setShowProfile, showProfile } = useContext(AppContext);

  const handleClick = () => {
    setShowProfile(false);
    sessionStorage.clear("id");
  };

  return (
    <div
      className='profile_details'
      style={{ display: showProfile ? "block" : "none" }}
    >
      <div className='profile_tab'>
        <img src={profileData[0]?.profilepicture} alt="profile" />
        <p>{profileData[0]?.name}</p>
        <p>{profileData[0]?.email}</p>
      </div>
      <hr />
      <div className='getProfile' onClick={() => setShowProfile(false)}>
        <GetProfiles />
      </div>

      <Link to="/">
        <button onClick={handleClick} className='signout_button'>
          Sign out
        </button>
      </Link>
    </div>
  );
};

export default ProfileDetails;
