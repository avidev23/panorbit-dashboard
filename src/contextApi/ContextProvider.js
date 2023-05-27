import React, { useState } from "react";
import { createContext } from "react";
import { getProfile } from "../APIS/panApi";

export const AppContext = createContext();
const ContestProvider = ({ children }) => {
  
  const [showProfile, setShowProfile] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getAllData = () => {
    setLoading(true);
    setError(false); 
    getProfile()
      .then((res) => {
        setData(res.data.users);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  };

  const getFilterData = (id) => {
    getProfile()
      .then((res) => {
        setProfileData(res.data.users.filter((el) => el.id === Number(id)));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <AppContext.Provider
      value={{
        data,
        profileData,
        getFilterData,
        loading,
        error,
        getAllData,
        setShowProfile,
        showProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContestProvider;
