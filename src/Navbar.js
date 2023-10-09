import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div className={styles.sidenav + ' ' + styles.right}>
        <NavLink
          exact
          to="/"
          activeClassName={styles.active + ' ' + styles.activeLink}
          className={styles.nav}
        >
          <div className={styles.icon + ' fa fa-home'}></div>
          <div className={styles.description}>Moon</div>
        </NavLink>

        <NavLink
          to="/info"
          activeClassName={styles.active + ' ' + styles.activeLink}
          className={styles.nav}
        >
          <div className={styles.icon + ' fa fa-database'}></div>
          <div className={styles.description}>Info</div>
        </NavLink>

        <NavLink
          to="/us"
          activeClassName={styles.active + ' ' + styles.activeLink}
          className={styles.nav}
        >
          <div className={styles.icon + ' fa fa-users'}></div>
          <div className={styles.description}>Us</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
