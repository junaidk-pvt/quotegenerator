import { NavLink, Outlet } from 'react-router-dom';
import { Path } from './utils/Path'
import styles from './Layout.module.scss'

function Layout() {

  return (
    <>
      <div className={styles.navDiv}>
        {Path.map((elem) => {
          return (
            <NavLink
              key={elem.id}
              to={elem.path}
              className={({ isActive }) => `${styles.link} ${isActive && styles.activeLink}`}
            >
              <p> {elem?.name} </p>
            </NavLink>
          )
        })}
      </div>
      <Outlet />

    </>
  );
}

export default Layout;
