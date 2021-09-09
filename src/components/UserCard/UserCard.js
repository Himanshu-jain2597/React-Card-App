import React  from "react";
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
      {users.length > 0 ?
        users.map((user,index) => {
          return (
            <UserDetails 
            user = {user} 
            key = {index}
            removeUser = {removeUser}/>
          )
        }):<div>No Records Found Please add a user by entering a user name</div>}
    </div>
  );
};

export default UserCard;
