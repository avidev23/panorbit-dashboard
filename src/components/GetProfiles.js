import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contextApi/ContextProvider";
import '../css/GetProfile.css'

const GetProfiles = () => {
  const { data, loading, error, getAllData } = useContext(AppContext); // getting data from contest api

  useEffect(() => {
    getAllData();
  }, []);

  // -------- loading ---------
  if (loading) {
    return <h3 style={{ color: "teal" }}>Loading....</h3>;
  }

  //  --------- error ---------
  if (error) {
    return <h3 style={{ color: "red" }}>server error....</h3>;
  }
 
  return (
    <div className='card_bottom'>
      {/* --------- Data maping ------ */}
      {data &&
        data.map((el) => (
          <div key={el.id}>
            <Link
              to={`/homepage/${el.id}`}
            >
              <div className='maping_div'>
                <img src={el.profilepicture} alt="profile_image" />
                <p className='profile_name'>{el.name}</p>
              </div>
            </Link>
            <hr style={{ "opacity" : ".5"}}/>
          </div>
        ))}
    </div>
  );
};

export default GetProfiles;
