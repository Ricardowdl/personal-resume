import React from "react";
import styles from "./index.less";

function Header() {
  return (
    <header
      className={`${styles.header} ${styles["scroll-header"]}`}
      id="header"
    >
      <nav className="nav container">
        <a href="#" className="nav__logo">
          ASOUTHERNCAT
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>
                <p>Home</p>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                <p>About</p>
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                <p>Skills</p>
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                <p>Portfolio</p>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                <p>Contactme</p>
              </a>
            </li>
            <li className="nav__item">
              <div className="nav__link" id="translate">
                {/* <svg className="icon nav__icon-svg" aria-hidden="true">
                     <use xlink:href="#icon-fanyi"></use>
                  </svg> */}
                <a className="=nav__link" id="nav__translate">
                  Translate
                </a>
              </div>
            </li>
          </ul>
          <i className="uil uil-times nav__close" id="nav-close"></i>
        </div>

        <div className="nav__btns">
          <i className="uil uil-moon change-theme" id="theme-button"></i>
          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
