import React, { useState, useRef } from "react";
import style from "./chatmodal.module.css";
import usersData from "../../../Component/User/User.json";
import User from "../../../Component/User/User";
import Message from "../../../Component/Message/Message";

export default function ChatModal() {
  const [userActive, setUserActive] = useState([]);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current && messagesEndRef.current.scrollIntoView();
    }, 0);
  };

  function userSelected(event) {
    const addUserActive = {
      id: parseInt(event.id, 10),
      name: event.name
    };
    setUserActive(addUserActive);
    scrollToBottom();
  }

  return (
    <div className="chat__box" >
      <User
        users={usersData}
        userSelected={userSelected}
        userActive={userActive}
      />
      {userActive.id && (
        <Message
          userActive={userActive}
          messagesEndRef={messagesEndRef}
          scrollToBottom={scrollToBottom}
        />
      )}
    </div>
  );
}
