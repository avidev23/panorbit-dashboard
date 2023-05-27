import React, { useEffect, useState } from "react";
import '../css/Chat.css'
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import { AppContext } from "../contextApi/ContextProvider";

const Chat = () => {
  const { data, loading, error, getAllData } = useContext(AppContext); // getting data from contest api
  const [hide, setHide] = useState(false);

  useEffect(() => {
    getAllData();
  }, []);

  // -------- loading ---------
  if (loading) {
    return <h3 style={{ color: "teal" }}>Loading....</h3>;
  }

  // --------- error ---------
  if (error) {
    return <h3 style={{ color: "red" }}>server error....</h3>;
  }
  return (
    <div
      className='chat_main'
      style={{ marginTop: hide ? "-270px" : "20px" }}
    >
      <div onClick={() => setHide(!hide)} className='chat'>
        <div>
          <BsChatRight />
          <p>Chat</p>
        </div>
        {hide ? <FiChevronDown /> : <FiChevronUp />}
      </div>
      {hide ? (
        <div className='chat_profiles'>
          {/* --------- Data maping ------ */}
          {data &&
            data.map((el) => (
              <div key={el.id}>
                <div className='maping_div'>
                  <img src={el.profilepicture} alt="profileimage" />
                  <p>{el.name}</p> 
                  {el.id%2===0 || el.id%3===0 ? (<span>🟢</span>) : <span>⚫</span>} 
                  
                </div>
                
              </div>
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chat;
