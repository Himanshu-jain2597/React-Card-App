import React, { useState } from "react";
import UserDetails from "./UserDetails";

/**
 * Card to show user details
 * @param {*} props
 * @returns
 */
const UserCard = (props) => {
  const { users, removeUser } = props;
    
  return (
    <div className="row">
      {users.length > 0 &&
        users.map((user) => {
          return (
            <UserDetails 
            user = {user} 
            key = {user.id}
            removeUser = {removeUser}/>
          )
        })}
    </div>
  );
};

export default UserCard;
