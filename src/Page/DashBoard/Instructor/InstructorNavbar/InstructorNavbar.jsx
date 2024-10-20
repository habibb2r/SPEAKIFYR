import React from "react";
import { FaHome, FaWrench } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const InstructorNavbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3">
        <li>
          <NavLink to="instructor">
            <FaHome></FaHome>Home{" "}
          </NavLink>
        </li>

        <li>
          <NavLink to="managecourse">
            <FaWrench />Manage{" "}
          </NavLink>
        </li>
      </div>
    </>
  );
};

export default InstructorNavbar;
