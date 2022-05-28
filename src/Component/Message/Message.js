import React, { useState } from "react";
import Input from "../Input/Input";
import messagesData from "./message.json";

export default function Message({
  userActive,
  messagesEndRef,
  scrollToBottom
}) {
  const [messages, setMessages] = useState(messagesData);
  function addMessages(value) {
    const newMessages = {
      userId: userActive.id,
      type: "text",
      sender: "admin",
      value
    };
    setMessages([...messages, newMessages]);
    scrollToBottom();
  }

  return (
    <div className="conver__box">
      <div className="conver__header">{userActive.name}</div>
      <div className="conver__main">
        {messages.map((data, index) => {
          if (userActive.id === data.userId) {
            return (
              <div key={index} className={`conver__item ${data.sender}`}>
                <div className="conver__list">{data.value}</div>
                <div ref={messagesEndRef} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <Input addMessages={addMessages} userActive={userActive} />
    </div>
  );
}
