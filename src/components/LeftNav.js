import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import '../css/LeftNav.css';

const LeftNav = () => {
  const [id, setId] = useState("1");

  useEffect(() => {
    setId(sessionStorage.getItem("id") || 1);
  }, []);

  return (
    <div className='leftnav_main'>
      <NavLink
        to={`/homepage/${id}`}
        className={({ isActive }) =>
          isActive ? 'active' : 'notActive'
        }
      >
        <p>Profile</p>
      </NavLink>

      <hr />
      
      <NavLink
        to="/post"
        className={({ isActive }) =>
        isActive ? 'active' : 'notActive'
        }
      >
        <p>Posts</p>
      </NavLink>
     
      <hr />
     
      <NavLink
        to="/gallery"
        className={({ isActive }) =>
        isActive ? 'active' : 'notActive'
        }
      >
        <p>Gallery</p>
      </NavLink>
     
      <hr />
    
      <NavLink
        to="/todo"
        className={({ isActive }) =>
        isActive ? 'active' : 'notActive'
        }
      >
        <p>ToDo</p>
      </NavLink>
    </div>
  );
};

export default LeftNav;
