import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Hamburger from "./Hamburger";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };
  let location = useLocation();

  return (
    <>
      <header id="head">
        <div id="logo">
          <Link to="/">
            <h1>Randy's Art Portfolio</h1>
          </Link>
        </div>
        <div id="nav">
          <Link to='/'>
            <p className={location.pathname === '/' ? 'currentFootNav' : ''}>Home</p>
          </Link>
          <Link to='/originals'>
            <p className={location.pathname === '/originals' ? 'currentFootNav' : ''}>Originals</p>
          </Link>
          <Link to='/fanArt'>
            <p className={location.pathname === '/fanArt' ? 'currentFootNav' : ''}>Fan Art</p>
          </Link>
          <Link to='/portraits'>
            <p className={location.pathname === '/portraits' ? 'currentFootNav' : ''}>Portraits</p>
          </Link>
          <a href="https://www.instagram.com/orwrandal/" target="_blank">
            <p>Instagram</p>
          </a>
          <a href="mailto:randypichardo004@gmail.com">
            <p>Contact Me</p>
          </a>
        </div>
        <Hamburger isActive={isActive} onClick={handleHamburgerClick} />
      </header>
      <div className={`dropDown ${isActive ? 'drop-active' : 'not-active'}`}>
        <Link to='/'>
          <h3 className={location.pathname === '/' ? 'currentFootNav' : ''} onClick={handleHamburgerClick}>Home</h3>
        </Link>
        <Link to='/originals'>
          <h3 className={location.pathname === '/originals' ? 'currentFootNav' : ''} onClick={handleHamburgerClick}>Originals</h3>
        </Link>
        <Link to='/fanArt'>
          <h3 className={location.pathname === '/fanArt' ? 'currentFootNav' : ''} onClick={handleHamburgerClick}>Fan Art</h3>
        </Link>
        <Link to='/portraits'>
          <h3 className={location.pathname === '/portraits' ? 'currentFootNav' : ''} onClick={handleHamburgerClick}>Portraits</h3>
        </Link>
      </div>
      {/* <hr /> */}
    </>
  );
};

export default NavBar;