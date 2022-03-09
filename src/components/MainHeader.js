import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const isActiveRoute = (navData) => {
  return navData.isActive ? classes.active : '';
};

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={isActiveRoute} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={isActiveRoute} to='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
