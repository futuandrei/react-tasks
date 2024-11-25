import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "./Button";

const Header = () => {
  const loginStatus = false;
  const buttonText = loginStatus ? "Logout" : "Log in";

  const handleButtonClick = () => {
    console.log(loginStatus ? "Logging out..." : "Logging in");
  };

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/">
          <p className={styles.logo}>React Demo App</p>
        </NavLink>
        <div className={styles.headerMenu}>
          <ul>
            <li>
              <NavLink to="/">List</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
          <Button onClick={buttonText} text={buttonText} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
