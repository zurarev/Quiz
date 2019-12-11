import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>ტესტები</h3>
      </div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            მთავარი
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/add-new-test" activeClassName="active-link">
            ახალი ტესტის დამატება
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/statistic" activeClassName="active-link">
            სტატისტიკა
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
