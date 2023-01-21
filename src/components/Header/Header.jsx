import { useState } from 'react';
import css from './Header.module.css';
import { Squash as Hamburger } from 'hamburger-react';
import Menu from '../Menu';
import Date from '../Date/Date';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className={css.header}>
        <Hamburger color="white" size={22} toggled={isOpen} toggle={setOpen} />
        <Date></Date>
      </header>
      <Menu show={isOpen}></Menu>
    </>
  );
};

export default Header;
