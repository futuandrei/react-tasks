import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';
import Button from './Button';


const Header = (props) => {

    const buttonText = props.loginStatus ? "Log out" : "Log in";

    return <div className={styles.header}>
        <nav className={styles.nav}>
        <NavLink to='/'><p className={styles.logo}>React Demo App</p></NavLink>
        <div className={styles.headerMenu}>
        <ul>
            <li><NavLink to='/'>List</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
        </ul>
        <Button onClick={props.onClick} text={buttonText}/>
        </div>
        </nav>
    </div>
}

export default Header;