import React from "react";

import DropDown from "react-bootstrap/Dropdown";

const Sorting = (props) => {
  const { onSortingUser } = props;
  return (
    <div>
      <DropDown>
        <DropDown.Toggle>Sort by</DropDown.Toggle>
        <DropDown.Menu>
          <DropDown.Item
            eventKey="name"
            onSelect={(event) => onSortingUser(event)}
          >
            Name
          </DropDown.Item>
          <DropDown.Item
            eventKey="location"
            onSelect={(event) => onSortingUser(event)}
          >
            Location
          </DropDown.Item>
          <DropDown.Item
            eventKey="followers"
            onSelect={(event) => onSortingUser(event)}
          >
            Followers
          </DropDown.Item>
        </DropDown.Menu>
      </DropDown>
    </div>
  );
};

export default Sorting;
