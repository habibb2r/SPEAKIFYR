import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const InstructorNavbar = () => {
    return (
        <>
             <li>
        <NavLink to="home">
          <FaHome></FaHome>Home{" "}
        </NavLink>
      </li>
     
        </>
    );
};

export default InstructorNavbar;