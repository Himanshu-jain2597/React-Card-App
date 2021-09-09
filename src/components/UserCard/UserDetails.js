import React, { useState } from "react";
import { showConfirmation } from "../../actions/confirmation-action";
import { useDispatch } from "react-redux";
const UserDetails = (props) => {
  const { user, removeUser } = props,
    [showBio, setShowBio] = useState(false);
  const dispatch = useDispatch();

  /**
   * This will open pop-up to confirm whether to delete the user or not
   * @param {*} id
   */
  const showConfirmPopUp = (id) => {
    dispatch(
      showConfirmation({
        type:"Please Confirm",
        message: "Are You sure You want to delete the user??",
        args: id,
        onClickYes: removeUser,
      })
    );
  };

  return (
    <div
      key={user.id}
      className="col-lg-4 col-md-6 col-sm-12 user-card-container"
      onMouseEnter={() => setShowBio(true)}
      onMouseLeave={() => setShowBio(false)}
    >
      <div className="user-card">
        <button
          type="button"
          className="btn-close"
          style={{ float: "right" }}
          onClick={() => showConfirmPopUp(user.id)}
        ></button>
        <img src={user.avatar_url} alt={user.name} style={{ width: "100%" }} />
        <p>{user.name}</p>
        <p>{user.location}</p>
        <p>{user.followers}</p>
        {showBio && <p>{user.bio}</p>}
      </div>
    </div>
  );
};

export default UserDetails;
