import React, { useState } from "react";
import axios  from "axios";

import { useDispatch } from "react-redux";

import AddUser from "../../components/AddUser/AddUser";
import UserCard from "../../components/UserCard/UserCard";

import {showLoading , hideLoading} from "../../actions/loader-action";

const CardApp = () => {
  const [users, setUsers] = useState([]),
  dispatch = useDispatch();
   console.log(users);

/**
 * function to add user searched user will be name of user to add
 */
  const onAddUser = async(searchedUser) => {
    dispatch(showLoading());
    try {
    const response = await axios.get(`https://api.github.com/users/${searchedUser}`);
    setUsers((prevState)=> [...prevState,response.data]);
    } 
    catch(e) {
        alert(e.message);
    }
    dispatch(hideLoading());
  };

  /**
   * function to remove user
   */
  const removeUser = (id) => {
    setUsers((prevState)=>prevState.filter((user)=> user.id!==id))
  }

  return (
    <>
      <AddUser onAddUser={onAddUser} />
      <UserCard 
      users = {users} 
      removeUser = {removeUser}/>
    </>
  );
};

export default CardApp;
