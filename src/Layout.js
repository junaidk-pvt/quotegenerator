import { NavLink, Outlet } from 'react-router-dom';
import { Path } from './utils/Path'
import styles from './Layout.module.scss'
import { useSelector } from 'react-redux';

function Layout() {
  const bookmarks = useSelector((state) => state?.quotes?.bookmark.length)
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
              <p> {elem?.name} <span className={styles.bookmark}> {(elem.id===2 && bookmarks >0) && `(${bookmarks})`}</span></p>
            </NavLink>
          )
        })}
      </div>
      <Outlet />

    </>
  );
}

export default Layout;
