import React, { useContext } from "react";
import LeftNav from "../components/LeftNav";
import TopNav from "../components/TopNav";
import { AppContext } from "../contextApi/ContextProvider";
import '../css/Todo.css';

const ToDo = () => {
  const { setShowProfile } = useContext(AppContext);

  return (
    <div className='todo_main'>
      <LeftNav />

      <div className='todo_top'>
        <div className='todo_profile'>
          <h2>ToDo</h2>
          <TopNav />
        </div>

        <hr style ={{ color: "grey", width: "100%" }} />

        <div className='todo_screen' onClick={() => setShowProfile(false)}>
          <h1 className='ComingSoon'>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
