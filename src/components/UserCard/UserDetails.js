import React, { useState } from "react";

const UserDetails = (props) => {
  const { user, removeUser } = props,
    [showBio, setShowBio] = useState(false);
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
          onClick={() => removeUser(user.id)}
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
