import React from "react";
import GetProfiles from "../components/GetProfiles";
import '../css/LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className='accounts_list_card'>
        <h1 className='card_top'>Select an account</h1>
        <GetProfiles />
      </div>
    </div>
  );
};

export default LandingPage;
