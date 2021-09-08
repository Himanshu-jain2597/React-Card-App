import React, { useState } from "react";

/**
 * Add User component input and add button
 * @returns
 */
const AddUser = (props) => {
  const {onAddUser} =  props ,
    [searchedUser, setSearachedUser] = useState("");

  /**
   * excute on change of input this will prevent entering empty spaces
   * @param {*} e
   */
  const inputChangeHandler = (e) => {
    const { value } = e.target;
    if (!searchedUser && value.trim().length === 0) {
      return;
    }
    setSearachedUser(value);
  };
  /**
   * function will execute on clicking add user button or pressing enter button
   * @param {*} event
   */
  const submitFormHandler = (event) => {
    event.preventDefault();
    onAddUser(searchedUser);
  };
  return (
    <>
      <form className="add-user">
        <input
          type="text"
          placeholder="add user"
          value={searchedUser}
          onChange={inputChangeHandler}
        />
        <button onClick={submitFormHandler}>Add</button>
      </form>
    </>
  );
};

export default AddUser;
