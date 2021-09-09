import React, { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";

import AddUser from "../../components/AddUser/AddUser";
import UserCard from "../../components/UserCard/UserCard";
import Sorting from "../../components/Sorting/Sorting";

import { showLoading, hideLoading } from "../../actions/loader-action";
import { showConfirmation } from "../../actions/confirmation-action";
const CardApp = () => {
  const [users, setUsers] = useState([]),
    dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    // uncomment this function if u want  dummy users
    // fetchUers();
  }, []);

  /**
   * Fetch user from API. almost all the data does not have user key , bio  key , location key
   */
  const fetchUers = async () => {
    dispatch(showLoading());
    try {
      const response = await axios.get("https://api.github.com/users");
      setUsers((prevState) => [...prevState, ...response.data]);
    } catch (e) {
      alert(e.message);
    }
    dispatch(hideLoading());
  };

  /**
   * function to add user searched user will be name of user to add
   */
  const onAddUser = async (searchedUser) => {
    dispatch(showLoading());
    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchedUser}`
      );
      if (response) {
        // check if user is already added.
        const isAleardyExist = users.find(
          (user) => user.id === response.data.id
        );
        if (isAleardyExist) {
          dispatch(
            showConfirmation({
              type: "Notification",
              message: "this user has been aleardy added",
            })
          );
        } else {
          setUsers((prevState) => [...prevState, response.data]);
        }
      }
    } catch (e) {
      dispatch(
        showConfirmation({
          type: "Notification",
          message: e.message,
        })
      );
    }
    dispatch(hideLoading());
  };

  /**
   * function to remove user
   */
  const removeUser = (id) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  };

  const sortByKey = (key) => (a, b) => a[key] > b[key] ? 1 : -1;

  /**
   *  SortUsers
   * @param {String} key name, location , followers
   */

  const onSortingUser = (key) => {
    setUsers((prevState) => prevState.slice().sort(sortByKey(key)));
  };

  return (
    <>
      <div className="card-app-container mb-5 mt-3">
        <AddUser onAddUser={onAddUser} />
        <div className="card-app-sorting">
          <Sorting onSortingUser={onSortingUser} />
        </div>
      </div>
      <UserCard users={users} removeUser={removeUser} />
    </>
  );
};

export default CardApp;
