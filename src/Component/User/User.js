import React from "react";

export default function User({ users, userSelected, userActive }) {
  const classNameUser = (data) =>
    "user__item" +
    (userActive.id === data.id ? " active" : "") +
    (data.unread ? " unread" : "");

  return (
    <div className="user__box">
      {users.map((data, index) => {
        return (
          <div
            key={index}
            className={classNameUser(data)}
            onClick={() => userSelected(data)}
          >
            <div className="user__img"></div>
            <div className="user__name">{data.name}</div>
          </div>
        );
      })}
    </div>
  );
}
