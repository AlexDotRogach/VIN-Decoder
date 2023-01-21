import { NavLink } from 'react-router-dom';
import css from './Menu.module.css';
import clsx from 'clsx';
const Menu = ({ show }) => {
  return (
    <div className={clsx(css.wrapper, show && css.isNavOpen)}>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? css.navItem_active : css.navItem}`
          }
        >
          Начальная страница
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            `${isActive ? css.navItem_active : css.navItem}`
          }
        >
          Поиск
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `${isActive ? css.navItem_active : css.navItem}`
          }
        >
          Все поиски
        </NavLink>
      </nav>
    </div>

    // <NavLink to='/quotes' className={({isActive}) =>`${isActive ? s.active : ''}`}>?
  );
};

export default Menu;
